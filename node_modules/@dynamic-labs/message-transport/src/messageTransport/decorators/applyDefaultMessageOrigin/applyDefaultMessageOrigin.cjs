'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** Allows setting a default origin, making the origin property optional */
const applyDefaultMessageOrigin = ({ defaultOrigin, messageTransport, }) => (Object.assign(Object.assign({}, messageTransport), { defaultOrigin, emit: (message) => {
        var _a;
        messageTransport.emit(Object.assign(Object.assign({}, message), { origin: (_a = message.origin) !== null && _a !== void 0 ? _a : defaultOrigin }));
    } }));

exports.applyDefaultMessageOrigin = applyDefaultMessageOrigin;
