export type RetryOnFailParams<T> = {
    /**
     * The delay between retries in milliseconds.
     */
    delay?: number;
    /**
     * The function to call.
     */
    fn: () => Promise<T>;
    /**
     * The maximum number of retries.
     *
     * When set to 0, the function will be called only once and is
     * therefore equivalent to calling the function directly.
     */
    maxRetries: number;
};
export declare const retryOnFail: <T>({ delay, fn, maxRetries, }: RetryOnFailParams<T>) => Promise<T>;
//# sourceMappingURL=retryOnFail.d.ts.map