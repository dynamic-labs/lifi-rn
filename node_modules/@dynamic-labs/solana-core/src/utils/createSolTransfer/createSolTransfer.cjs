'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var web3_js = require('@solana/web3.js');
var utils = require('@dynamic-labs/utils');

const createSolTransfer = (_a) => _tslib.__awaiter(void 0, [_a], void 0, function* ({ fromAddress, toAddress, amount, blockhash, }) {
    const message = new web3_js.TransactionMessage({
        instructions: [
            web3_js.SystemProgram.transfer({
                fromPubkey: new web3_js.PublicKey(fromAddress),
                lamports: Math.round(utils.solToLamports(amount)),
                toPubkey: new web3_js.PublicKey(toAddress),
            }),
        ],
        payerKey: new web3_js.PublicKey(fromAddress),
        recentBlockhash: blockhash,
    }).compileToV0Message();
    return new web3_js.VersionedTransaction(message);
});

exports.createSolTransfer = createSolTransfer;
