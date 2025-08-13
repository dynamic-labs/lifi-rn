'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Decorator that adds the following features to a MessageTransport:
 * 1. Any emit calls will not emit the message yet. These messages will be stored.
 * 2. When the unblock method is called:
 *    1. All stored messages are emitted.
 *    2. Any future emit calls will no longer store the message, and instead
 *      will emit them right away, as normal.
 */
const makeWaitForUnblock = ({ messageTransport, bypassBlockIf = () => false, }) => {
    /** Whether to block any new messages */
    let blocked = true;
    /**
     * Messages pending to be sent once unblocked, along with their onEmit callbacks
     */
    let pendingMessages = [];
    /**
     * Ids of incoming message sessions.
     * We don't want to block responses to these messages.
     */
    const bypassedMessageSessionIds = new Set();
    return {
        block: () => {
            blocked = true;
        },
        emit: (message, options) => {
            const { onEmit } = options !== null && options !== void 0 ? options : {};
            if (bypassBlockIf(message) && blocked) {
                bypassedMessageSessionIds.add(message.messageSessionId);
            }
            // Even if blocking, we still want to let through ids of messages that
            // can bypass the block (this includes any responses, since they share the same id)
            if (blocked && !bypassedMessageSessionIds.has(message.messageSessionId)) {
                pendingMessages.push({ message, onEmit });
                return;
            }
            messageTransport.emit(message);
            onEmit === null || onEmit === void 0 ? void 0 : onEmit();
        },
        isBlocked: () => blocked,
        off: (callback) => messageTransport.off(callback),
        on: (callback) => messageTransport.on(callback),
        unblock: () => {
            if (!blocked)
                return;
            blocked = false;
            // Emit all stored messages
            for (const { message, onEmit } of pendingMessages) {
                messageTransport.emit(message);
                onEmit === null || onEmit === void 0 ? void 0 : onEmit();
            }
            pendingMessages = [];
            bypassedMessageSessionIds.clear();
        },
    };
};

exports.makeWaitForUnblock = makeWaitForUnblock;
