'use client'
'use strict';

var web3_js = require('@solana/web3.js');
var rpcProviders = require('@dynamic-labs/rpc-providers');
require('../../../_virtual/_tslib.cjs');
require('@solana/spl-token');
require('@dynamic-labs/utils');
var getOverrideRpcUrlForNetwork = require('../../utils/getOverrideRpcUrlForNetwork/getOverrideRpcUrlForNetwork.cjs');

rpcProviders.ChainRpcProviders.getSolanaProviderByChainId = (rpcProviders, chainId) => {
    var _a;
    const provider = (_a = rpcProviders['solana']) === null || _a === void 0 ? void 0 : _a.find((rpcProvider) => rpcProvider.chainId === chainId);
    return provider;
};
rpcProviders.ChainRpcProviders.registerSolanaProviders = (connectionConfig) => {
    rpcProviders.ChainRpcProviders.registerChainProviders(rpcProviders.ProviderChain.SOLANA, (config) => {
        const rpcProviders = {};
        if (config === null || config === void 0 ? void 0 : config.solana) {
            rpcProviders.solana = config.solana.map((network) => {
                const rpcUrl = getOverrideRpcUrlForNetwork.getOverrideRpcUrlForNetwork(connectionConfig, network);
                const provider = new web3_js.Connection(rpcUrl, connectionConfig);
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
