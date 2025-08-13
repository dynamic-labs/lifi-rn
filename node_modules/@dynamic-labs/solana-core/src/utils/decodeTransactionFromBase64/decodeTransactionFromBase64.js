'use client'
import { Transaction, VersionedTransaction } from '@solana/web3.js';

const decodeTransactionFromBase64 = (encodedTransaction) => {
    const transactionBuffer = Buffer.from(encodedTransaction.transaction, 'base64');
    if (encodedTransaction.type === 'legacy') {
        return Transaction.from(transactionBuffer);
    }
    return VersionedTransaction.deserialize(transactionBuffer);
};

export { decodeTransactionFromBase64 };
