'use client'
import { ChainRpcProviders } from '@dynamic-labs/rpc-providers';

const solanaProvidersSelector = (providers) => {
    if (!providers)
        return {
            defaultProvider: undefined,
            getProviderByChainId: () => undefined,
            providers: [],
        };
    const getProviderByChainId = (chainId) => { var _a; return (_a = ChainRpcProviders.getSolanaProviderByChainId) === null || _a === void 0 ? void 0 : _a.call(ChainRpcProviders, providers, chainId); };
    return {
        defaultProvider: getProviderByChainId('101'),
        getProviderByChainId,
        providers: providers === null || providers === void 0 ? void 0 : providers.solana,
    };
};

export { solanaProvidersSelector };
