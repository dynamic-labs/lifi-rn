'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class InvalidPrimaryWalletOrConnectorError extends DynamicError.DynamicError {
    constructor(code) {
        super('Primary wallet is not properly set or the wallet connector is missing from DynamicContextProvider settings.', code);
    }
}

exports.InvalidPrimaryWalletOrConnectorError = InvalidPrimaryWalletOrConnectorError;
