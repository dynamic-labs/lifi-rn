'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var debug = require('../../debug/debug.cjs');
var applyRecoveryManager = require('../../messageTransport/decorators/applyRecoveryManager/applyRecoveryManager.cjs');
var logger = require('../../utils/logger.cjs');
var utils = require('../utils/utils.cjs');

const createRequestChannelMessageSender = ({ requestType, messageSessionId, timeoutMap, onReceiveAck, messageTransport, onTimeout, params, debugOverride, disableAckForOutgoingMessage = false, }) => {
    /**
     * Tracks whether this sender's message has timed out.
     * This way we can identify that it was a false negative if the message
     * eventually arrives later.
     */
    let messageTimedOut = false;
    const ackMessageType = utils.getAckMessageType(requestType);
    const isDebugEnabled = () => debugOverride !== null && debugOverride !== void 0 ? debugOverride : debug.isGlobalDebugEnabled();
    const outgoingMessage = {
        args: params,
        doNotAck: disableAckForOutgoingMessage,
        messageSessionId,
        type: requestType,
    };
    const getTimestamp = () => new Date().toISOString();
    // We must listen for acks
    const handleAckMessage = ({ messageSessionId: incomingSessionId, type: incomingType, doNotAck: incomingDoNotAck, }) => {
        // DO NOT ignore ack messages when disableAckForOutgoingMessage is true.
        // disableAckForOutgoingMessage means OUTGOING messages will not receive an ack.
        // This is different than the INCOMING message's doNotAck, which is what we care about here
        if (incomingSessionId !== messageSessionId ||
            incomingType !== ackMessageType ||
            incomingDoNotAck) {
            return;
        }
        if (isDebugEnabled()) {
            logger.logger.debug(`[messageSender ${requestType} ${getTimestamp()}] — received ack message (messageSessionId: ${messageSessionId}). Message timeout ID: ${timeoutMap[messageSessionId]}. Content of timeoutMap: ${JSON.stringify(timeoutMap)}`);
        }
        clearTimeout(timeoutMap[messageSessionId]);
        delete timeoutMap[messageSessionId];
        onReceiveAck === null || onReceiveAck === void 0 ? void 0 : onReceiveAck();
        if (messageTimedOut) {
            if (isDebugEnabled()) {
                logger.logger.debug(`[messageSender ${requestType} ${getTimestamp()}] — identified a false negative for message time out. Message: ${requestType} with session id ${messageSessionId}`);
            }
            logger.logger.instrument(`Identified a false negative for message time out. Message: ${requestType} with session id ${messageSessionId}. Params: ${JSON.stringify(params)}`);
        }
    };
    const sendMessage = () => {
        if (disableAckForOutgoingMessage) {
            messageTransport.emit(outgoingMessage);
            return;
        }
        const startTimer = () => {
            const timeoutTimer = setTimeout(() => {
                // Try to recover connection if available
                if (applyRecoveryManager.hasRecoveryManager(messageTransport) &&
                    messageTransport.recoveryManager.canRetryMessageSessionId(messageSessionId)) {
                    if (isDebugEnabled()) {
                        logger.logger.debug(`[messageSender ${requestType} ${getTimestamp()}] — timed out, triggering recovery (messageSessionId: ${messageSessionId})`);
                    }
                    messageTransport.recoveryManager.triggerRecovery(messageSessionId);
                    if (isDebugEnabled()) {
                        logger.logger.debug(`[messageSender ${requestType} ${getTimestamp()}] — attempting to send message again (messageSessionId: ${messageSessionId})`);
                    }
                    sendMessage();
                }
                else {
                    // If no recovery is available, send an error
                    onTimeout();
                    messageTimedOut = true;
                }
            }, utils.TIMEOUT_DURATION);
            if (isDebugEnabled()) {
                logger.logger.debug(`[messageSender ${requestType} ${getTimestamp()}] — setting timeout timer (messageSessionId: ${messageSessionId}). Timeout ID: ${timeoutTimer}. Content of timeoutMap: ${JSON.stringify(timeoutMap)}`);
            }
            timeoutMap[messageSessionId] = timeoutTimer;
        };
        // If this message transport is currently blocked, we must only start
        // the timeout once the message is actually emitted
        // We don't just default to this because the onEmit option is only
        // present in the message transport if has the block decorator
        if ('isBlocked' in messageTransport && messageTransport.isBlocked()) {
            messageTransport.emit(outgoingMessage, { onEmit: startTimer });
            return;
        }
        // We start the timer immediately since the message was not blocked
        startTimer();
        // Now we emit the event to set off the request
        messageTransport.emit(outgoingMessage);
    };
    return { handleAckMessage, sendMessage };
};

exports.createRequestChannelMessageSender = createRequestChannelMessageSender;
