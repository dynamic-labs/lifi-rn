'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isSolanaWallet = (wallet) => ['SOL'].includes(wallet.chain);

exports.isSolanaWallet = isSolanaWallet;
