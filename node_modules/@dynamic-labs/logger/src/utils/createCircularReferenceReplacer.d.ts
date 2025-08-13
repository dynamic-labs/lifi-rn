/**
 * Returns a JSON.stringify replacer that safely skips circular references.
 */
export declare const createCircularReferenceReplacer: () => (key: string, value: unknown) => unknown;
