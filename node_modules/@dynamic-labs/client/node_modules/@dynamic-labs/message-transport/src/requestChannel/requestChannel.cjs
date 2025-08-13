'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var debug = require('../debug/debug.cjs');
var isSerializedError = require('../utils/isSerializedError/isSerializedError.cjs');
var logger = require('../utils/logger.cjs');
var parseErrorFromTransport = require('../utils/parseErrorFromTransport/parseErrorFromTransport.cjs');
var serializeErrorForTransport = require('../utils/serializeErrorForTransport/serializeErrorForTransport.cjs');
var createRequestChannelMessageSender = require('./createRequestChannelMessageSender/createRequestChannelMessageSender.cjs');
var utils = require('./utils/utils.cjs');

/**
 * Allows handling and submitting requests to and from a webview.
 * Requests are messages that (can) expect some response.
 *
 * Functions similarly to an event emitter, but adds a response feature:
 * - Emitting an event type is the act of making a "request" of a specific type,
 * and it returns a promise that will resolve to the request's response.
 * - Listening to an event type is the act of "handling" requests of a specific type.
 * This handler callback must return a promise if this request type expects responses.
 *
 * Think of it this way:
 * Whenever I emit an event, I am submitting a request.
 * Whoever listens to the event will handle my request.
 * If the request type expects some kind of response, they will
 * return a promise that resolves (or rejects) after my request is fulfilled.
 *
 * This is an abstraction built on top of the MessageTransport interface.
 */
const createRequestChannel = (messageTransport, { debugOverride, disableAcknowledgement } = {}) => {
    /** Used to generated unique ids */
    let uniqueIdCounter = 0;
    /** Id prefix unique to this channel */
    const idPrefix = Math.random().toString();
    /** Always returns a different string */
    const getUniqueId = () => `${idPrefix}-${uniqueIdCounter++}`;
    /** Maps a request's session ID to its time out timer */
    const timeoutMap = {};
    const isDebugEnabled = () => debugOverride !== null && debugOverride !== void 0 ? debugOverride : debug.isGlobalDebugEnabled();
    const getTimestamp = () => new Date().toISOString();
    return {
        emit: (requestType, ...params) => new Promise((resolve, reject) => {
            // Generate the unique id for this message exchange session
            // Although we won't listen for a response, it must still be unique
            // to avoid tangling with other requests.
            const messageSessionId = getUniqueId();
            const { handleAckMessage, sendMessage } = createRequestChannelMessageSender.createRequestChannelMessageSender({
                debugOverride,
                disableAckForOutgoingMessage: disableAcknowledgement,
                messageSessionId,
                messageTransport,
                onReceiveAck: () => {
                    cleanupMessageHandler();
                    resolve();
                },
                onTimeout: () => {
                    reject(utils.createNoHandlerError(requestType));
                    cleanupMessageHandler();
                },
                params,
                requestType,
                timeoutMap,
            });
            const cleanupMessageHandler = () => messageTransport.off(handleAckMessage);
            if (disableAcknowledgement) {
                resolve();
            }
            else {
                messageTransport.on(handleAckMessage);
            }
            sendMessage();
        }),
        handle: (requestType, handler) => {
            const messageHandler = (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ args, messageSessionId, type: incomingType, doNotAck = false, }) {
                if (requestType !== incomingType)
                    return;
                if (!doNotAck) {
                    // Emit an Ack since the message will time out unless some handler acks it in time
                    messageTransport.emit({
                        args: [],
                        messageSessionId,
                        type: utils.getAckMessageType(requestType),
                    });
                }
                const result = handler(...args);
                // If the handler doesn't return a promise,
                // that means we don't need to respond.
                if (!(result instanceof Promise))
                    return;
                try {
                    const response = yield result;
                    messageTransport.emit({
                        args: [response],
                        messageSessionId,
                        type: utils.getResolveMessageType(requestType),
                    });
                }
                catch (error) {
                    messageTransport.emit({
                        args: [serializeErrorForTransport.serializeErrorForTransport(error)],
                        messageSessionId,
                        type: utils.getRejectMessageType(requestType),
                    });
                }
            });
            messageTransport.on(messageHandler);
            return () => {
                messageTransport.off(messageHandler);
            };
        },
        request: (requestType, ...params) => new Promise((resolve, reject) => {
            // Generate the unique id for this message exchange session
            // Although we won't listen for a response, it must still be unique
            // to avoid tangling with other requests.
            const messageSessionId = getUniqueId();
            const resolveMessageType = utils.getResolveMessageType(requestType);
            const rejectMessageType = utils.getRejectMessageType(requestType);
            const { handleAckMessage, sendMessage } = createRequestChannelMessageSender.createRequestChannelMessageSender({
                debugOverride,
                disableAckForOutgoingMessage: disableAcknowledgement,
                messageSessionId,
                messageTransport,
                onTimeout: () => {
                    reject(utils.createNoHandlerError(requestType));
                    cleanupMessageHandler();
                },
                params,
                requestType,
                timeoutMap,
            });
            // We also need to listen to resolve and reject messages, besides acks
            const handleMessage = (message) => {
                if (message.messageSessionId !== messageSessionId)
                    return;
                if (isDebugEnabled()) {
                    logger.logger.debug(`[request ${requestType} ${getTimestamp()}] — received response message (messageSessionId: ${messageSessionId})`);
                }
                const { args: [result], type: incomingType, } = message;
                if (incomingType === resolveMessageType) {
                    cleanupMessageHandler();
                    resolve(result);
                    if (isDebugEnabled()) {
                        logger.logger.debug(`[request ${requestType} ${getTimestamp()}] — resolved message (messageSessionId: ${messageSessionId})`);
                    }
                    return;
                }
                if (incomingType === rejectMessageType) {
                    cleanupMessageHandler();
                    if (isSerializedError.isSerializedError(result)) {
                        reject(parseErrorFromTransport.parseErrorFromTransport(result));
                    }
                    else {
                        reject(result);
                    }
                    if (isDebugEnabled()) {
                        logger.logger.debug(`[request ${requestType} ${getTimestamp()}] — rejected message (messageSessionId: ${messageSessionId})`);
                    }
                    return;
                }
                handleAckMessage(message);
            };
            const cleanupMessageHandler = () => messageTransport.off(handleMessage);
            messageTransport.on(handleMessage);
            sendMessage();
        }),
    };
};

exports.createRequestChannel = createRequestChannel;
