import { MessageTransport } from '../../messageTransport';
import { BypassBlockCallback } from '../makeWaitForUnblock';
type MakeWaitForInitEventProps<M extends MessageTransport> = {
    /** MessageTransport to add this decorator to */
    messageTransport: M;
    /** Which message type should trigger the initialization */
    initializeMessageType: string;
    /** If true is returned, the message will not be blocked */
    bypassBlockIf?: BypassBlockCallback;
};
/**
 * Decorator that adds the following features to a MessageTransport:
 * 1. Any emit calls will not emit the message yet. These messages will be stored.
 * 2. When the provided messageTransport receives a message of type initializeMessageType:
 *    1. All stored messages are emitted.
 *    2. Any future emit calls will no longer store the message, and instead
 *      will emit them right away, as normal.
 */
export declare const makeWaitForInitEvent: <M extends MessageTransport>({ bypassBlockIf, initializeMessageType, messageTransport, }: MakeWaitForInitEventProps<M>) => import("../makeWaitForUnblock").WithBlock<M>;
export {};
