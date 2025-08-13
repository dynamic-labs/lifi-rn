'use client'
import { createRequestChannel } from '../../requestChannel/requestChannel.js';
import '@dynamic-labs/utils';
import '../../utils/logger.js';

const createStoreSetter = ({ key, messageTransport, }) => {
    // We don't know what these types are yet, so any will do
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const requestChannel = createRequestChannel(messageTransport);
    return {
        set: (newValues) => {
            const entries = Object.entries(newValues);
            for (const [variable, newValue] of entries) {
                const messageName = `${key}__${variable}Changed`;
                requestChannel.emit(messageName, newValue);
            }
        },
    };
};

export { createStoreSetter };
