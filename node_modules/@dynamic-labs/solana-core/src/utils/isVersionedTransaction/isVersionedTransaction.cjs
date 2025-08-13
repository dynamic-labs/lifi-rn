'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isVersionedTransaction = (transaction) => 'version' in transaction;

exports.isVersionedTransaction = isVersionedTransaction;
