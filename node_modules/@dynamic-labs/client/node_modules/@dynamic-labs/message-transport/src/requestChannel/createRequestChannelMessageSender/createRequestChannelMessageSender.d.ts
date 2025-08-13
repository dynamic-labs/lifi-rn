/// <reference types="node" />
import { MessageTransportData, WithBlock } from '../../messageTransport';
import { MessageTransportWithDefaultOrigin } from '../../messageTransport/decorators/applyDefaultMessageOrigin/applyDefaultMessageOrigin';
import { RequestTypes } from '../types';
type RequestChannelMessageSenderParams<T extends RequestTypes, K extends Extract<keyof T, string>> = {
    requestType: K;
    messageSessionId: string;
    timeoutMap: Record<string, NodeJS.Timer>;
    onReceiveAck?: VoidFunction;
    onTimeout: VoidFunction;
    messageTransport: MessageTransportWithDefaultOrigin | WithBlock<MessageTransportWithDefaultOrigin>;
    params: Parameters<T[K]>;
    debugOverride?: boolean;
    disableAckForOutgoingMessage?: boolean;
};
export declare const createRequestChannelMessageSender: <T extends RequestTypes, K extends Extract<keyof T, string>>({ requestType, messageSessionId, timeoutMap, onReceiveAck, messageTransport, onTimeout, params, debugOverride, disableAckForOutgoingMessage, }: RequestChannelMessageSenderParams<T, K>) => {
    handleAckMessage: ({ messageSessionId: incomingSessionId, type: incomingType, doNotAck: incomingDoNotAck, }: MessageTransportData) => void;
    sendMessage: () => void;
};
export {};
