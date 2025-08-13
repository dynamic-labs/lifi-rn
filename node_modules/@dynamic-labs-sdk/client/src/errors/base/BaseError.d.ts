export type BaseErrorParameters = {
    /** The underlying error that caused this error, if any */
    cause: Error | null;
    /** The error unique code */
    code: string;
    /** Additional detailed information about the error */
    details?: string;
    /** URL to relevant documentation for this error */
    docsUrl: string | null;
    /** Array of additional contextual messages to be displayed */
    metaMessages?: string[];
    /** Custom name for the error. Defaults to 'BaseError' if not provided */
    name: string;
    /** A brief, human-readable description of the error */
    shortMessage: string;
};
/**
 * Base error class that provides structured error handling with detailed information
 */
export declare abstract class BaseError extends Error {
    /** The error unique code */
    code: string;
    details: string | undefined;
    private readonly formattedMessage;
    name: string;
    cause: BaseError | Error | undefined;
    constructor(args: BaseErrorParameters);
    /**
     * Walks the cause chain of the error and returns the root error
     */
    walk(): Error | undefined;
    toString(): string | undefined;
}
//# sourceMappingURL=BaseError.d.ts.map