'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EventEmitter = require('eventemitter3');

const MAX_RETRIES = 1;
/**
 * Applies recovery management functionality to a MessageTransport
 * This allows for handling message delivery failures and connection recovery
 */
const applyRecoveryManager = ({ messageTransport, }) => {
    const eventEmitter = new EventEmitter.EventEmitter();
    const messageRetryCounts = new Map();
    return Object.assign(Object.assign({}, messageTransport), { recoveryManager: {
            canRetryMessageSessionId: (messageSessionId) => {
                var _a;
                const currentCount = (_a = messageRetryCounts.get(messageSessionId)) !== null && _a !== void 0 ? _a : 0;
                return currentCount < MAX_RETRIES;
            },
            onRecoveryRequested: (callback) => {
                eventEmitter.on('recoveryRequested', callback);
                return () => eventEmitter.off('recoveryRequested', callback);
            },
            triggerRecovery: (messageSessionId) => {
                var _a;
                const currentCount = (_a = messageRetryCounts.get(messageSessionId)) !== null && _a !== void 0 ? _a : 0;
                messageRetryCounts.set(messageSessionId, currentCount + 1);
                if (messageTransport.isBlocked()) {
                    return;
                }
                eventEmitter.emit('recoveryRequested');
            },
        } });
};
/**
 * Type guard to check if a MessageTransport has recovery management functionality
 */
const hasRecoveryManager = (messageTransport) => 'recoveryManager' in messageTransport;

exports.applyRecoveryManager = applyRecoveryManager;
exports.hasRecoveryManager = hasRecoveryManager;
