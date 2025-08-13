import { SerializedError } from '../serializeErrorForTransport';
/**
 * Parses a serialized error object back into an Error instance.
 * This function will recreate an Error or a specific subclass of Error
 * based on the name property if it matches known error types.
 * Additional properties are added back to the reconstructed error object.
 *
 * @param {SerializedError} serializedError - The serialized error object to parse.
 * @returns {Error} - The reconstructed Error instance.
 */
export declare const parseErrorFromTransport: (serializedError: SerializedError) => Error | unknown[];
