import type { DynamicClient } from '../../../client/types/DynamicClient';
/**
 * Creates a service accessor function that manages service instantiation and caching.
 * The returned function will either retrieve an existing service from the registry or
 * create a new one using the provided builder function.
 *
 * @template - The type of service to be created/accessed
 * @param key - Unique identifier for the service in the registry
 * @param builder - Function that creates the service instance when called with a DynamicClient
 */
export declare const createRuntimeServiceAccessKey: <T>(key: string, builder: (client: DynamicClient) => T) => (client: DynamicClient) => T;
//# sourceMappingURL=createRuntimeServiceAccessKey.d.ts.map