'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EventEmitter = require('eventemitter3');
var reactivity = require('@vue/reactivity');
var requestChannel = require('../requestChannel/requestChannel.cjs');
require('@dynamic-labs/utils');
require('../utils/logger.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

const createStore = ({ initialState, key, messageTransport, }) => {
    // We don't know what these types are yet, so any will do
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const requestChannel$1 = requestChannel.createRequestChannel(messageTransport);
    /**
     * The event emitter for this store getter.
     *
     * Not to be confused with the events that come from the messageTransport:
     * - The messageTransport is a tool for sending/receiving messages to/from a webview.
     * - This event emitter allows raising events exclusively for change events of this store's variables,
     * and will only be used by the modules that are reading from the store, most likely to be forwarded
     * for clients to have access to.
     */
    const eventEmitter = new EventEmitter__default["default"]();
    const state = reactivity.reactive(Object.assign({}, initialState));
    const getters = {};
    for (const variable in state) {
        // Add the state getter
        Object.defineProperty(getters, variable, {
            get: () => state[variable],
        });
        // We need to add a listener for each of this store's variables.
        // That listener will listen for messageTransport "value changed" events,
        // which we will use to update the store's values and raise events.
        const messageName = `${key}__${variable}Changed`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        requestChannel$1.handle(messageName, (newValue) => {
            state[variable] = newValue;
            const eventName = `${variable}Changed`;
            // We emit with the same event name for simplicity, but keep in mind
            // the eventEmitter events are different from the messageTransport message we are handling.
            // Read above for elaboration.
            //
            // There are some limitation on what we can achieve with typescript in this file,
            // but all this is encapsulated in this function and it works like a charm for whoever calls it.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            eventEmitter.emit(eventName, newValue);
        });
    }
    return {
        eventEmitter,
        getters,
    };
};

exports.createStore = createStore;
