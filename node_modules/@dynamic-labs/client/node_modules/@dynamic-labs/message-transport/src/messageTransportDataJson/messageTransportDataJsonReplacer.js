'use client'
/**
 * Replacer to be used when serializing message transport messages
 *
 * @example
 * JSON.stringify(data, messageTransportDataJsonReplacer)
 */
const messageTransportDataJsonReplacer = (_, value) => {
    if (typeof value === 'bigint') {
        return { __type: 'bigint', value: value.toString() };
    }
    return value;
};

export { messageTransportDataJsonReplacer };
