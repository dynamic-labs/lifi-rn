'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getOverrideRpcUrlForNetwork = (connectionConfig, network) => {
    var _a, _b, _c, _d, _e;
    const isSolanaNetwork = network.name.toLowerCase().includes('solana');
    const isEclipseNetwork = network.name.toLowerCase().includes('eclipse');
    let overrideRpcUrl;
    if (isSolanaNetwork) {
        overrideRpcUrl = (_b = (_a = connectionConfig === null || connectionConfig === void 0 ? void 0 : connectionConfig.customRpcUrls) === null || _a === void 0 ? void 0 : _a.solana) === null || _b === void 0 ? void 0 : _b[0];
    }
    if (isEclipseNetwork) {
        overrideRpcUrl = (_d = (_c = connectionConfig === null || connectionConfig === void 0 ? void 0 : connectionConfig.customRpcUrls) === null || _c === void 0 ? void 0 : _c.eclipse) === null || _d === void 0 ? void 0 : _d[0];
    }
    return (overrideRpcUrl || ((_e = network.privateCustomerRpcUrls) === null || _e === void 0 ? void 0 : _e[0]) || network.rpcUrls[0]);
};

exports.getOverrideRpcUrlForNetwork = getOverrideRpcUrlForNetwork;
