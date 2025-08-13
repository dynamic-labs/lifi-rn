/** Defines the structure of messages that can be sent to and from webviews */
export type MessageTransportData = {
    /**
     * A list of stamps that represent the history of the message
     */
    transportStamps?: {
        /**
         * The id of the message transport that emitted this message
         */
        messageTransportId: string;
        /**
         * The date and time when the message was emitted
         */
        emittedAt: string;
    }[];
    /**
     * Defines which kind of message this is.
     *
     * Ex: "link-wallet", "logout"
     */
    type: string;
    /**
     * Any relevant arguments attached to the message.
     * Its contents must be interpreted according to the type of the message.
     *
     * Ex: for "link-wallet" type, can be ["metamask"], which should be interpreted as
     * the target wallet connector.
     */
    args: unknown[];
    /**
     * A string that uniquely identifies this message exchange session.
     * If the other end wants to send another message as a response to this message,
     * then it should have the same messageSessionId.
     *
     * Ex: for "link-wallet" type, the other end could then eventually emit a message with type
     * "link-wallet__resolved" and with the same messageSessionId, indicating a success.
     */
    messageSessionId: string;
    /** Identifies which end emitted this message */
    origin: 'webview' | 'host';
    /**
     * Whether this message is expected to NOT receive an ack reply.
     *
     * If this is true, the other end should NOT emit an ack message.
     */
    doNotAck?: boolean;
};
export type MessageTransportCallback = (data: MessageTransportData) => void;
/**
 * An interface for a structure that allows sending messages to and from webviews.
 * Functions similarly to an event emitter, but there's some distinctions:
 * 1. You cannot listen to specific types of messages. You either listen to all messages or none.
 * Note that each message has a type which you can use to decide what to do with it.
 * 2. Each message has a messageSessionId which allows the other end to "respond"
 * by emitting another event with the same messageSessionId.
 */
export type MessageTransport = {
    emit: (message: MessageTransportData) => void;
    off: (callback: MessageTransportCallback) => void;
    on: (callback: MessageTransportCallback) => void;
};
/** Creates a simple message transport for general use */
export declare const createMessageTransport: () => MessageTransport;
