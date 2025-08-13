'use client'
import EventEmitter from 'eventemitter3';
import { createRequestChannel } from '../../requestChannel/requestChannel.js';
import '@dynamic-labs/utils';
import '../../utils/logger.js';

// There are way too many "any"s in this file. They are necessary because otherwise the generics won't work
function createEventEmitterForMessages({ messageTransport, initialEventEmitter, eventNames, }) {
    const events = initialEventEmitter !== null && initialEventEmitter !== void 0 ? initialEventEmitter : new EventEmitter();
    const requestChannel = createRequestChannel(messageTransport);
    for (const eventName of eventNames) {
        requestChannel.handle(eventName, (...payload) => events.emit(eventName, ...payload));
    }
    return events;
}

export { createEventEmitterForMessages };
