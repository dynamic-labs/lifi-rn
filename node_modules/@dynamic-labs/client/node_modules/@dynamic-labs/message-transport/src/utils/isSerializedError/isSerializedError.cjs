'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isSerializedError = (serializedError) => {
    if (typeof serializedError !== 'object' || serializedError === null) {
        return false;
    }
    const { message, stack } = serializedError;
    return typeof message === 'string' && typeof stack === 'string';
};

exports.isSerializedError = isSerializedError;
