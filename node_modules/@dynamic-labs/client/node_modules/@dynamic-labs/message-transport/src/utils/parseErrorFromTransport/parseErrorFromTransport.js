'use client'
import { __rest } from '../../../_virtual/_tslib.js';

/**
 * Parses a serialized error object back into an Error instance.
 * This function will recreate an Error or a specific subclass of Error
 * based on the name property if it matches known error types.
 * Additional properties are added back to the reconstructed error object.
 *
 * @param {SerializedError} serializedError - The serialized error object to parse.
 * @returns {Error} - The reconstructed Error instance.
 */
const parseErrorFromTransport = (serializedError) => {
    const { message, name, stack } = serializedError, otherProps = __rest(serializedError, ["message", "name", "stack"]);
    let error;
    // If we have passed in a array of values, we just use it directly
    if (message) {
        try {
            const data = JSON.parse(message);
            if (Array.isArray(data))
                return data;
        }
        catch (_a) {
            /* empty */
        }
    }
    // Determine the type of the error based on the 'name' property and instantiate accordingly
    switch (name) {
        case 'TypeError':
            error = new TypeError(message);
            break;
        case 'ReferenceError':
            error = new ReferenceError(message);
            break;
        case 'SyntaxError':
            error = new SyntaxError(message);
            break;
        case 'RangeError':
            error = new RangeError(message);
            break;
        case 'EvalError':
            error = new EvalError(message);
            break;
        case 'URIError':
            error = new URIError(message);
            break;
        default:
            // Default to a generic Error if the specific type isn't recognized
            error = new Error(message);
            error.name = name || 'Error'; // Ensure the name is set, defaulting to 'Error' if not provided
    }
    // Reattach the stack trace and any other enumerable properties
    if (stack) {
        error.stack = [message, stack].join('\n');
    }
    // Reattach other custom properties that may have been serialized
    Object.assign(error, otherProps);
    return error;
};

export { parseErrorFromTransport };
