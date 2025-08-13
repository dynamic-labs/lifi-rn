import { Transaction, VersionedTransaction } from '@solana/web3.js';
import { EncodedTransaction } from '../encodeTransactionToBase64';
export declare const decodeTransactionFromBase64: (encodedTransaction: EncodedTransaction) => Transaction | VersionedTransaction;
