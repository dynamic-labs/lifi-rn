'use client'
import { isVersionedTransaction } from '../isVersionedTransaction/isVersionedTransaction.js';

const encodeTransactionToBase64 = (transaction) => ({
    transaction: Buffer.from(transaction.serialize({
        verifySignatures: false,
    })).toString('base64'),
    type: isVersionedTransaction(transaction) ? 'versioned' : 'legacy',
});

export { encodeTransactionToBase64 };
