/**
 * Defines the shape of a serialized error object.
 */
export type SerializedError = {
    message?: string;
    name?: string;
    stack?: string;
    [key: string]: unknown;
};
/**
 * Serializes an error to a JSON object to be sent by transport.
 * This function checks if the input is an instance of Error to capture
 * standard properties like message, name, and stack. It also attempts to
 * serialize any enumerable properties that are present on error-like objects.
 *
 * @param {unknown} err - The error or error-like object to serialize.
 * @returns {SerializedError} - The serialized error object.
 */
export declare const serializeErrorForTransport: (err: unknown) => SerializedError;
