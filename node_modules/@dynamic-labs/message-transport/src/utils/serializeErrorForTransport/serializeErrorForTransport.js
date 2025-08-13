'use client'
/**
 * Serializes an error to a JSON object to be sent by transport.
 * This function checks if the input is an instance of Error to capture
 * standard properties like message, name, and stack. It also attempts to
 * serialize any enumerable properties that are present on error-like objects.
 *
 * @param {unknown} err - The error or error-like object to serialize.
 * @returns {SerializedError} - The serialized error object.
 */
const serializeErrorForTransport = (err) => {
    if (err instanceof Error) {
        return convertError(err);
    }
    else if (Array.isArray(err)) {
        return { message: JSON.stringify(err) };
    }
    else if (typeof err === 'object' && err !== null) {
        const errorMessage = serializeObjectToMessage(err);
        return convertError(Object.assign({ message: errorMessage, name: 'Error', stack: '' }, err));
    }
    return { message: String(err) };
};
const convertError = (err) => (Object.assign({ 
    // @ts-expect-error message is a standard property of Error
    message: err.message, 
    // @ts-expect-error name is a standard property of Error
    name: err.name, stack: err.stack }, err));
const serializeObjectToMessage = (obj) => {
    try {
        const data = JSON.stringify(obj);
        return data;
    }
    catch (_a) {
        return String(obj);
    }
};

export { serializeErrorForTransport };
