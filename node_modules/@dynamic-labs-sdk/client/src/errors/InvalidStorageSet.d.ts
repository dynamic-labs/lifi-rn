import { BaseError } from './base';
type InvalidStorageSetParams = {
    key: string;
    value: string;
};
export declare class InvalidStorageSet extends BaseError {
    constructor({ key, value }: InvalidStorageSetParams);
}
export {};
//# sourceMappingURL=InvalidStorageSet.d.ts.map