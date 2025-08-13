'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EventEmitter = require('eventemitter3');
var requestChannel = require('../../requestChannel/requestChannel.cjs');
require('@dynamic-labs/utils');
require('../../utils/logger.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

// There are way too many "any"s in this file. They are necessary because otherwise the generics won't work
function createEventEmitterForMessages({ messageTransport, initialEventEmitter, eventNames, }) {
    const events = initialEventEmitter !== null && initialEventEmitter !== void 0 ? initialEventEmitter : new EventEmitter__default["default"]();
    const requestChannel$1 = requestChannel.createRequestChannel(messageTransport);
    for (const eventName of eventNames) {
        requestChannel$1.handle(eventName, (...payload) => events.emit(eventName, ...payload));
    }
    return events;
}

exports.createEventEmitterForMessages = createEventEmitterForMessages;
