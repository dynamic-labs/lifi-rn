/**
 * Reviver to be used when deserializing message transport messages
 *
 * @example
 * JSON.parse(data, messageTransportDataJsonReviver)
 */
export declare const messageTransportDataJsonReviver: (_: string, value: unknown) => unknown;
