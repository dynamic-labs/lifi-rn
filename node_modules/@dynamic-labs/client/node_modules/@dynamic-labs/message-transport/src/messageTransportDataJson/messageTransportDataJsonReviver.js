'use client'
/**
 * Reviver to be used when deserializing message transport messages
 *
 * @example
 * JSON.parse(data, messageTransportDataJsonReviver)
 */
const messageTransportDataJsonReviver = (_, value) => {
    /**
     * Handle bigint values that were serialized as { __type: 'bigint', value: '123' }
     */
    if (value &&
        typeof value === 'object' &&
        '__type' in value &&
        value.__type === 'bigint' &&
        'value' in value &&
        typeof value.value === 'string') {
        return BigInt(value.value);
    }
    return value;
};

export { messageTransportDataJsonReviver };
