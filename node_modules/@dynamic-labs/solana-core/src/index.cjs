'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var SolanaWalletConnector = require('./connector/SolanaWalletConnector.cjs');
require('./rpc/RpcProviderSolana/RpcProviderSolana.cjs');
var rpcProviders = require('@dynamic-labs/rpc-providers');
var solanaProvidersSelector = require('./rpc/solanaProvidersSelector/solanaProvidersSelector.cjs');
var SolanaUiTransaction = require('./utils/SolanaUiTransaction/SolanaUiTransaction.cjs');
var decodeTransactionFromBase64 = require('./utils/decodeTransactionFromBase64/decodeTransactionFromBase64.cjs');
var isVersionedTransaction = require('./utils/isVersionedTransaction/isVersionedTransaction.cjs');
var encodeTransactionToBase64 = require('./utils/encodeTransactionToBase64/encodeTransactionToBase64.cjs');
var getGenesisHashLSKey = require('./utils/getGenesisHashLSKey/getGenesisHashLSKey.cjs');
var isTransactionSigned = require('./utils/isTransactionSigned/isTransactionSigned.cjs');
var getOverrideRpcUrlForNetwork = require('./utils/getOverrideRpcUrlForNetwork/getOverrideRpcUrlForNetwork.cjs');
var createNonNativeTokenTransfer = require('./utils/createNonNativeTokenTransfer/createNonNativeTokenTransfer.cjs');
var createSolTransfer = require('./utils/createSolTransfer/createSolTransfer.cjs');
var getBackwardsCompatibleSolNetworks = require('./utils/getBackwardsCompatibleSolNetworks/getBackwardsCompatibleSolNetworks.cjs');
var SolanaWallet = require('./wallet/SolanaWallet.cjs');
var isSolanaWallet = require('./wallet/isSolanaWallet/isSolanaWallet.cjs');
var isLedgerSolanaWallet = require('./wallet/isLedgerSolanaWallet/isLedgerSolanaWallet.cjs');
var constants = require('./constants.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/solana-core', _package.version);

exports.SolanaWalletConnector = SolanaWalletConnector.SolanaWalletConnector;
exports.solanaProvidersSelector = solanaProvidersSelector.solanaProvidersSelector;
exports.SolanaUiTransaction = SolanaUiTransaction.SolanaUiTransaction;
exports.decodeTransactionFromBase64 = decodeTransactionFromBase64.decodeTransactionFromBase64;
exports.isVersionedTransaction = isVersionedTransaction.isVersionedTransaction;
exports.encodeTransactionToBase64 = encodeTransactionToBase64.encodeTransactionToBase64;
exports.getGenesisHashLSKey = getGenesisHashLSKey.getGenesisHashLSKey;
exports.isTxAlreadySigned = isTransactionSigned.isTxAlreadySigned;
exports.getOverrideRpcUrlForNetwork = getOverrideRpcUrlForNetwork.getOverrideRpcUrlForNetwork;
exports.createNonNativeTokenTransfer = createNonNativeTokenTransfer.createNonNativeTokenTransfer;
exports.createSolTransfer = createSolTransfer.createSolTransfer;
exports.getBackwardsCompatibleSolNetworks = getBackwardsCompatibleSolNetworks.getBackwardsCompatibleSolNetworks;
exports.SolanaWallet = SolanaWallet.SolanaWallet;
exports.isSolanaWallet = isSolanaWallet.isSolanaWallet;
exports.isLedgerSolanaWallet = isLedgerSolanaWallet.isLedgerSolanaWallet;
exports.DYNAMIC_SVM_NETWORK_ID_LS_KEY = constants.DYNAMIC_SVM_NETWORK_ID_LS_KEY;
exports.SOLANA_GENESIS_HASH = constants.SOLANA_GENESIS_HASH;
Object.keys(rpcProviders).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return rpcProviders[k]; }
  });
});
