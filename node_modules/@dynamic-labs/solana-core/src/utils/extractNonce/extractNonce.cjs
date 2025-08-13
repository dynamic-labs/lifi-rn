'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const extractNonce = (messageToSign) => {
    const regex = messageToSign.match(/Nonce: (.*)/);
    if (regex && regex.length === 2) {
        return regex[1];
    }
    return undefined;
};

exports.extractNonce = extractNonce;
