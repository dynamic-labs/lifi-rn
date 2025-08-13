'use client'
/** Creates a simple message transport for general use */
const createMessageTransport = () => {
    const listeners = new Set();
    return {
        emit: (message) => listeners.forEach((callback) => callback(message)),
        off: (callback) => listeners.delete(callback),
        on: (callback) => listeners.add(callback),
    };
};

export { createMessageTransport };
