'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class DecryptionError extends Error {
    constructor(errorName) {
        super(`Failed to decrypt the message: ${errorName}`);
    }
}

exports.DecryptionError = DecryptionError;
