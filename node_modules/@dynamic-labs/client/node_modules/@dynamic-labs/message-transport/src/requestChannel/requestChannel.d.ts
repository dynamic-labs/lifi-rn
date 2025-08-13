import { WithBlock } from '../messageTransport';
import { MessageTransportWithDefaultOrigin } from '../messageTransport/decorators/applyDefaultMessageOrigin/applyDefaultMessageOrigin';
import { RequestChannel, RequestTypes } from './types';
type CreateRequestChannelProps = {
    /**
     * Overrides whether to debug the request channel messages
     */
    debugOverride?: boolean;
    /**
     * Disables ack message replies for messages sent from this channel.
     *
     * Doesn't mean that this channel won't send ack replies to messages sent from
     * other channels — what this does mean is messages SENT from THIS channel will
     * not receive an ack reply.
     */
    disableAcknowledgement?: boolean;
};
/**
 * Allows handling and submitting requests to and from a webview.
 * Requests are messages that (can) expect some response.
 *
 * Functions similarly to an event emitter, but adds a response feature:
 * - Emitting an event type is the act of making a "request" of a specific type,
 * and it returns a promise that will resolve to the request's response.
 * - Listening to an event type is the act of "handling" requests of a specific type.
 * This handler callback must return a promise if this request type expects responses.
 *
 * Think of it this way:
 * Whenever I emit an event, I am submitting a request.
 * Whoever listens to the event will handle my request.
 * If the request type expects some kind of response, they will
 * return a promise that resolves (or rejects) after my request is fulfilled.
 *
 * This is an abstraction built on top of the MessageTransport interface.
 */
export declare const createRequestChannel: <T extends RequestTypes = never>(messageTransport: MessageTransportWithDefaultOrigin | WithBlock<MessageTransportWithDefaultOrigin>, { debugOverride, disableAcknowledgement }?: CreateRequestChannelProps) => RequestChannel<T>;
export {};
