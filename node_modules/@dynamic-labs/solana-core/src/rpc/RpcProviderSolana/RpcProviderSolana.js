'use client'
import { Connection } from '@solana/web3.js';
import { ChainRpcProviders, ProviderChain } from '@dynamic-labs/rpc-providers';
import '../../../_virtual/_tslib.js';
import '@solana/spl-token';
import '@dynamic-labs/utils';
import { getOverrideRpcUrlForNetwork } from '../../utils/getOverrideRpcUrlForNetwork/getOverrideRpcUrlForNetwork.js';

ChainRpcProviders.getSolanaProviderByChainId = (rpcProviders, chainId) => {
    var _a;
    const provider = (_a = rpcProviders['solana']) === null || _a === void 0 ? void 0 : _a.find((rpcProvider) => rpcProvider.chainId === chainId);
    return provider;
};
ChainRpcProviders.registerSolanaProviders = (connectionConfig) => {
    ChainRpcProviders.registerChainProviders(ProviderChain.SOLANA, (config) => {
        const rpcProviders = {};
        if (config === null || config === void 0 ? void 0 : config.solana) {
            rpcProviders.solana = config.solana.map((network) => {
                const rpcUrl = getOverrideRpcUrlForNetwork(connectionConfig, network);
                const provider = new Connection(rpcUrl, connectionConfig);
                return {
                    chainId: network.chainId.toString(),
                    chainName: network.name,
                    provider,
                };
            });
        }
        return rpcProviders.solana;
    });
};
