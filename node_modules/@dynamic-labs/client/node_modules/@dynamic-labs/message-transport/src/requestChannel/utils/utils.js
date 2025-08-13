'use client'
import { RequestChannelNotHandledError } from '@dynamic-labs/utils';
import { logger } from '../../utils/logger.js';

/** Given a request event name, returns the event name for its resolve */
const getResolveMessageType = (type) => `${type}__resolve`;
/** Given a request event name, returns the event name for its reject */
const getRejectMessageType = (type) => `${type}__reject`;
/** Given a request event name, returns the event name for its acknowledgement */
const getAckMessageType = (type) => `${type}__ack`;
/** Given a message type, returns true if it is an action message type */
const isAckMessageType = (type) => type.endsWith('__ack');
/** Given a message type, returns true if it is a resolve message type */
const isResolveMessageType = (type) => type.endsWith('__resolve');
/** Given a message type, returns true if it is a reject message type */
const isRejectMessageType = (type) => type.endsWith('__reject');
/** Given a message type, returns true if it is a request message type */
const isRequestMessageType = (type) => !isAckMessageType(type) &&
    !isResolveMessageType(type) &&
    !isRejectMessageType(type);
/** Returns a "no handlers registered" error for a message type */
const createNoHandlerError = (type) => {
    const message = `No handlers were registered for message of type ${type}`;
    logger.error(message);
    return new RequestChannelNotHandledError(message);
};
/**
 * When a request is sent, a timer will be started. If it times out before
 * a corresponding ack message is received, we reject the request with NO_HANDLERS_REGISTERED.
 *
 * This controls how many ms we should wait before we time out.
 */
const TIMEOUT_DURATION = 5000;

export { TIMEOUT_DURATION, createNoHandlerError, getAckMessageType, getRejectMessageType, getResolveMessageType, isAckMessageType, isRejectMessageType, isRequestMessageType, isResolveMessageType };
