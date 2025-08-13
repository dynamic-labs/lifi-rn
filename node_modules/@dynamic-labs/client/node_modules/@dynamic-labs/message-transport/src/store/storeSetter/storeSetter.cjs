'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var requestChannel = require('../../requestChannel/requestChannel.cjs');
require('@dynamic-labs/utils');
require('../../utils/logger.cjs');

const createStoreSetter = ({ key, messageTransport, }) => {
    // We don't know what these types are yet, so any will do
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const requestChannel$1 = requestChannel.createRequestChannel(messageTransport);
    return {
        set: (newValues) => {
            const entries = Object.entries(newValues);
            for (const [variable, newValue] of entries) {
                const messageName = `${key}__${variable}Changed`;
                requestChannel$1.emit(messageName, newValue);
            }
        },
    };
};

exports.createStoreSetter = createStoreSetter;
