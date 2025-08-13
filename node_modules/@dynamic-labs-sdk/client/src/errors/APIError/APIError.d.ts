import { BaseError } from '../base';
export declare class APIError extends BaseError {
    constructor(message: string, code: string);
    static fromResponse(response: Response): Promise<APIError | null>;
}
//# sourceMappingURL=APIError.d.ts.map