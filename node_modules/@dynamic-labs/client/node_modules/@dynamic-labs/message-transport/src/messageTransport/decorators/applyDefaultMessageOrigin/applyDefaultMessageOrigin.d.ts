import { MessageTransport, MessageTransportData } from '../../messageTransport';
export type MessageTransportDataOptionalOrigin = Omit<MessageTransportData, 'origin'> & {
    origin?: MessageTransportData['origin'];
};
export type MessageTransportWithDefaultOrigin = ReturnType<typeof applyDefaultMessageOrigin>;
type ApplyDefaultMessageOriginProps<T extends MessageTransport> = {
    defaultOrigin: MessageTransportData['origin'];
    messageTransport: T;
};
/** Allows setting a default origin, making the origin property optional */
export declare const applyDefaultMessageOrigin: <T extends MessageTransport>({ defaultOrigin, messageTransport, }: ApplyDefaultMessageOriginProps<T>) => T & {
    defaultOrigin: "webview" | "host";
    emit: (message: MessageTransportDataOptionalOrigin) => void;
};
export {};
