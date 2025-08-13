import { RpcProvidersSelector, SolanaRpcProvider } from '@dynamic-labs/rpc-providers';
export type SolanaRpcProviderMethods = {
    defaultProvider: SolanaRpcProvider | undefined;
    providers: SolanaRpcProvider[] | undefined;
    getProviderByChainId: (chainId: string) => SolanaRpcProvider | undefined;
};
export declare const solanaProvidersSelector: RpcProvidersSelector<SolanaRpcProviderMethods>;
