import { MessageTransport } from '../../messageTransport';
/**
 * Applies transport stamps to a message transport
 * as a trail of where the message has been
 */
export declare const applyTransportStamps: <T extends MessageTransport>(messageTransport: T) => T;
