import { MessageTransport } from '../../messageTransport';
import { WithBlock } from '../makeWaitForUnblock';
/**
 * Interface for the recovery management functionality that can be added to a MessageTransport
 */
export type WithRecoveryManager<T extends MessageTransport> = T & {
    recoveryManager: {
        /** Check if a specific message session can be retried */
        canRetryMessageSessionId: (messageSessionId: string) => boolean;
        /** Trigger a recovery attempt for a specific message session */
        triggerRecovery: (messageSessionId: string) => void;
        /** Register a callback to be called when recovery is requested */
        onRecoveryRequested: (callback: () => void) => () => void;
    };
};
/**
 * Applies recovery management functionality to a MessageTransport
 * This allows for handling message delivery failures and connection recovery
 */
export declare const applyRecoveryManager: <T extends WithBlock<MessageTransport>>({ messageTransport, }: {
    messageTransport: T;
}) => WithRecoveryManager<T>;
/**
 * Type guard to check if a MessageTransport has recovery management functionality
 */
export declare const hasRecoveryManager: (messageTransport: MessageTransport) => messageTransport is WithRecoveryManager<MessageTransport>;
