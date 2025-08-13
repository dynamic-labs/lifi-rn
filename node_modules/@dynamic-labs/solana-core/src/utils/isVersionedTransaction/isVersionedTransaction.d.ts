import { Transaction, VersionedTransaction } from '@solana/web3.js';
export declare const isVersionedTransaction: (transaction: Transaction | VersionedTransaction) => transaction is VersionedTransaction;
