'use client'
const isSerializedError = (serializedError) => {
    if (typeof serializedError !== 'object' || serializedError === null) {
        return false;
    }
    const { message, stack } = serializedError;
    return typeof message === 'string' && typeof stack === 'string';
};

export { isSerializedError };
