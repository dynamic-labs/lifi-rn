/**
 * Check if the given value is an Error object with a specific code
 */
export declare const isErrorWithCode: <T extends string>(error: unknown, code: T) => error is Error & {
    code: T;
};
//# sourceMappingURL=isErrorWithCode.d.ts.map