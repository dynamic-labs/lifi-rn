/**
 * Asserts that a value is not null or undefined, throwing an error if it is.
 * This function acts as a type guard, narrowing the type to exclude null and undefined.
 *
 * @template T - The type of the value being checked
 * @param value - The value to check for null or undefined
 * @param message - The error message to throw if the value is null or undefined
 * @throws Throws an error with the provided message if value is null or undefined
 * @example
 * ```typescript
 * const maybeString: string | null = getValue();
 * assertDefined(maybeString, 'String value is required');
 * // maybeString is now typed as string (null is excluded)
 * ```
 */
export declare function assertDefined<T>(value: T, message: string): asserts value is NonNullable<T>;
//# sourceMappingURL=assertDefined.d.ts.map