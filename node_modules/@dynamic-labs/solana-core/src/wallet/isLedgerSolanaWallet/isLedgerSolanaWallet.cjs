'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var isSolanaWallet = require('../isSolanaWallet/isSolanaWallet.cjs');

/**
 * Checks if wallet is a Solana wallet and it was marked as a Ledger wallet
 */
const isLedgerSolanaWallet = (wallet) => isSolanaWallet.isSolanaWallet(wallet) &&
    walletConnectorCore.isHardwareWalletConnector(wallet.connector) &&
    wallet.connector.isHardwareWalletEnabled;

exports.isLedgerSolanaWallet = isLedgerSolanaWallet;
