import { BaseError } from '../../errors/base';
/**
 * This error is thrown when the `retryOnFail` function is called with an invalid
 * number of retries (i.e. less than 0).
 */
export declare class InvalidRetryOnFailCallError extends BaseError {
    constructor(maxRetries: number);
}
//# sourceMappingURL=InvalidRetryOnFailCallError.d.ts.map