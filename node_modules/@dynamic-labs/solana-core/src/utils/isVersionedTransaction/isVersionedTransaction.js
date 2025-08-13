'use client'
const isVersionedTransaction = (transaction) => 'version' in transaction;

export { isVersionedTransaction };
