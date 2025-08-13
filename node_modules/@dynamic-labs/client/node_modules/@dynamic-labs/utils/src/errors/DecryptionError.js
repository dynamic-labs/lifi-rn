'use client'
class DecryptionError extends Error {
    constructor(errorName) {
        super(`Failed to decrypt the message: ${errorName}`);
    }
}

export { DecryptionError };
