import { Wallet } from '@dynamic-labs/wallet-connector-core';
import { SolanaWallet } from '../SolanaWallet';
export declare const isSolanaWallet: (wallet: Wallet) => wallet is SolanaWallet;
