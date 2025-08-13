/**
 * Replacer to be used when serializing message transport messages
 *
 * @example
 * JSON.stringify(data, messageTransportDataJsonReplacer)
 */
export declare const messageTransportDataJsonReplacer: (_: string, value: unknown) => unknown;
