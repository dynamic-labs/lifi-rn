'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isTxAlreadySigned = (transaction) => {
    let alreadySigned = false;
    if ('version' in transaction) {
        alreadySigned = transaction.signatures.some((sig) => !sig.every((byte) => byte === 0));
    }
    else {
        alreadySigned = transaction.signatures.some((sig) => sig.signature);
    }
    return alreadySigned;
};

exports.isTxAlreadySigned = isTxAlreadySigned;
