import { Connection } from '@solana/web3.js';
import { RpcProviders } from '@dynamic-labs/rpc-providers';
import { SolanaConnectionConfig } from '../../types';
type ISolanaRpcProvider = {
    chainId: string;
    chainName: string;
    provider: Connection;
};
declare module '@dynamic-labs/rpc-providers' {
    type SolanaRpcProvider = ISolanaRpcProvider;
    interface RpcProviderLookup {
        solana: SolanaRpcProvider[];
    }
    interface IChainRpcProviders {
        getSolanaProviderByChainId(rpcProviders: RpcProviders, chainId: string): SolanaRpcProvider | undefined;
        registerSolanaProviders(connectionConfig?: SolanaConnectionConfig): void;
    }
}
export {};
