'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var web3_js = require('@solana/web3.js');

const decodeTransactionFromBase64 = (encodedTransaction) => {
    const transactionBuffer = Buffer.from(encodedTransaction.transaction, 'base64');
    if (encodedTransaction.type === 'legacy') {
        return web3_js.Transaction.from(transactionBuffer);
    }
    return web3_js.VersionedTransaction.deserialize(transactionBuffer);
};

exports.decodeTransactionFromBase64 = decodeTransactionFromBase64;
