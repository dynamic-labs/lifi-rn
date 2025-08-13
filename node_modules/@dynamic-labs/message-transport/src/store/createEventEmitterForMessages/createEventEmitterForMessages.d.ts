import EventEmitter from 'eventemitter3';
import { MessageTransportWithDefaultOrigin } from '../../messageTransport';
/**
 * Use this function when you want to get an event emitter that will raise events for
 * messages that have a name inside eventNames
 */
export declare function createEventEmitterForMessages<T extends Record<string, (...args: any[]) => any> = never>(params: {
    messageTransport: MessageTransportWithDefaultOrigin;
    eventNames: string[];
}): EventEmitter<T>;
/**
 * Use this function when you want to get an event emitter that will raise events for
 * messages of type MessagesForEventEmitter
 */
export declare function createEventEmitterForMessages<T extends Record<string, (...args: any[]) => any> = never, E extends EventEmitter<any> = never>(params: {
    messageTransport: MessageTransportWithDefaultOrigin;
    initialEventEmitter: E;
    eventNames: string[];
}): E extends EventEmitter<infer V> ? EventEmitter<T & V> : never;
