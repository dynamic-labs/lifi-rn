'use client'
import { DynamicError } from './DynamicError.js';

class InvalidPrimaryWalletOrConnectorError extends DynamicError {
    constructor(code) {
        super('Primary wallet is not properly set or the wallet connector is missing from DynamicContextProvider settings.', code);
    }
}

export { InvalidPrimaryWalletOrConnectorError };
