import { Transaction, VersionedTransaction } from '@solana/web3.js';
export type EncodedTransaction = {
    type: 'legacy' | 'versioned';
    transaction: string;
};
export declare const encodeTransactionToBase64: (transaction: Transaction | VersionedTransaction) => EncodedTransaction;
