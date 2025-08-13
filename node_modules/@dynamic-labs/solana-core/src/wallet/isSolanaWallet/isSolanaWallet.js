'use client'
const isSolanaWallet = (wallet) => ['SOL'].includes(wallet.chain);

export { isSolanaWallet };
