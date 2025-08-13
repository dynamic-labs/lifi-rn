import { MessageTransport, MessageTransportData } from '../../messageTransport';
export type BypassBlockCallback = (message: MessageTransportData) => boolean;
type MakeWaitForUnblockProps<M extends MessageTransport> = {
    /** MessageTransport to add this decorator to */
    messageTransport: M;
    /** If true is return the message will not be blocked */
    bypassBlockIf?: BypassBlockCallback;
};
/**
 * A message transport that may have its messages blocked until unblock is called.
 *
 * This adds a second param to the emit method that allows triggering a callback when
 * the message is actually emitted.
 */
export type WithBlock<M extends MessageTransport> = M & {
    emit: (message: Parameters<M['emit']>[0], options?: {
        onEmit?: VoidFunction;
    }) => void;
    unblock: () => void;
    block: () => void;
    isBlocked: () => boolean;
};
/**
 * Decorator that adds the following features to a MessageTransport:
 * 1. Any emit calls will not emit the message yet. These messages will be stored.
 * 2. When the unblock method is called:
 *    1. All stored messages are emitted.
 *    2. Any future emit calls will no longer store the message, and instead
 *      will emit them right away, as normal.
 */
export declare const makeWaitForUnblock: <M extends MessageTransport>({ messageTransport, bypassBlockIf, }: MakeWaitForUnblockProps<M>) => WithBlock<M>;
export {};
