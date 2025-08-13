'use client'
import { makeWaitForUnblock } from '../makeWaitForUnblock/makeWaitForUnblock.js';

/**
 * Decorator that adds the following features to a MessageTransport:
 * 1. Any emit calls will not emit the message yet. These messages will be stored.
 * 2. When the provided messageTransport receives a message of type initializeMessageType:
 *    1. All stored messages are emitted.
 *    2. Any future emit calls will no longer store the message, and instead
 *      will emit them right away, as normal.
 */
const makeWaitForInitEvent = ({ bypassBlockIf, initializeMessageType, messageTransport, }) => {
    // Reuse unblock decorator
    const blockedTransport = makeWaitForUnblock({
        bypassBlockIf,
        messageTransport,
    });
    const handleInitialization = ({ type }) => {
        // Check if we are to initialize
        if (type !== initializeMessageType)
            return;
        blockedTransport.unblock();
    };
    // Listen for initialization
    messageTransport.on(handleInitialization);
    return blockedTransport;
};

export { makeWaitForInitEvent };
