/**
 * This function provides access to a shared instance of the wallet provider registry.
 *
 * It ensures that the same registry instance is used throughout the client to maintaining
 * consistency of registered wallet providers across different parts of the codebase.
 *
 * @returns The wallet provider registry instance
 *
 * @example
 * ```typescript
 * // Get the registry instance
 * const registry = getWalletProviderRegistry();
 *
 * // Register a wallet provider
 * registry.register({
 *   priority: WalletProviderPriority.WALLET_SDK,
 *   walletProvider: myWalletProvider
 * });
 *
 * // Retrieve a specific provider
 * const provider = registry.getByKey('metamask');
 * ```
 */
export declare const getWalletProviderRegistry: (client: import("../../../../exports").DynamicClient) => import("..").WalletProviderRegistry;
//# sourceMappingURL=getWalletProviderRegistry.d.ts.map