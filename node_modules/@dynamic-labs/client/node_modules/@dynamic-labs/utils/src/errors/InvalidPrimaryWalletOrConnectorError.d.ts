import { DynamicError } from './DynamicError';
import { ErrorCode } from './ErrorCode';
export declare class InvalidPrimaryWalletOrConnectorError extends DynamicError {
    constructor(code?: ErrorCode | string);
}
