'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Replacer to be used when serializing message transport messages
 *
 * @example
 * JSON.stringify(data, messageTransportDataJsonReplacer)
 */
const messageTransportDataJsonReplacer = (_, value) => {
    if (typeof value === 'bigint') {
        return { __type: 'bigint', value: value.toString() };
    }
    return value;
};

exports.messageTransportDataJsonReplacer = messageTransportDataJsonReplacer;
