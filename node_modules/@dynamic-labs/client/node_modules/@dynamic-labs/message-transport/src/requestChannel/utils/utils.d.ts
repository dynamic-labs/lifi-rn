import { RequestChannelNotHandledError } from '@dynamic-labs/utils';
/** Given a request event name, returns the event name for its resolve */
export declare const getResolveMessageType: (type: string) => string;
/** Given a request event name, returns the event name for its reject */
export declare const getRejectMessageType: (type: string) => string;
/** Given a request event name, returns the event name for its acknowledgement */
export declare const getAckMessageType: (type: string) => string;
/** Given a message type, returns true if it is an action message type */
export declare const isAckMessageType: (type: string) => boolean;
/** Given a message type, returns true if it is a resolve message type */
export declare const isResolveMessageType: (type: string) => boolean;
/** Given a message type, returns true if it is a reject message type */
export declare const isRejectMessageType: (type: string) => boolean;
/** Given a message type, returns true if it is a request message type */
export declare const isRequestMessageType: (type: string) => boolean;
/** Returns a "no handlers registered" error for a message type */
export declare const createNoHandlerError: (type: string) => RequestChannelNotHandledError;
/**
 * When a request is sent, a timer will be started. If it times out before
 * a corresponding ack message is received, we reject the request with NO_HANDLERS_REGISTERED.
 *
 * This controls how many ms we should wait before we time out.
 */
export declare const TIMEOUT_DURATION = 5000;
