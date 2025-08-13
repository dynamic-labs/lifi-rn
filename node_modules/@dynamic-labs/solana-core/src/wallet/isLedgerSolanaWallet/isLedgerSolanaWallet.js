'use client'
import { isHardwareWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { isSolanaWallet } from '../isSolanaWallet/isSolanaWallet.js';

/**
 * Checks if wallet is a Solana wallet and it was marked as a Ledger wallet
 */
const isLedgerSolanaWallet = (wallet) => isSolanaWallet(wallet) &&
    isHardwareWalletConnector(wallet.connector) &&
    wallet.connector.isHardwareWalletEnabled;

export { isLedgerSolanaWallet };
