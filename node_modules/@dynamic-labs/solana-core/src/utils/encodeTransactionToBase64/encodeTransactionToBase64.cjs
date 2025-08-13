'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isVersionedTransaction = require('../isVersionedTransaction/isVersionedTransaction.cjs');

const encodeTransactionToBase64 = (transaction) => ({
    transaction: Buffer.from(transaction.serialize({
        verifySignatures: false,
    })).toString('base64'),
    type: isVersionedTransaction.isVersionedTransaction(transaction) ? 'versioned' : 'legacy',
});

exports.encodeTransactionToBase64 = encodeTransactionToBase64;
