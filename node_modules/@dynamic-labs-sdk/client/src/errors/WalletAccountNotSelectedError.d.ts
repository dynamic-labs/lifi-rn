import { BaseError } from './base';
export declare class WalletAccountNotSelectedError extends BaseError {
    readonly expectedAddress: string;
    readonly selectedAddress: string;
    constructor(params: {
        expectedAddress: string;
        selectedAddress: string;
    });
}
//# sourceMappingURL=WalletAccountNotSelectedError.d.ts.map