import { VersionedTransaction } from '@solana/web3.js';
export declare const createSolTransfer: ({ fromAddress, toAddress, amount, blockhash, }: {
    fromAddress: string;
    toAddress: string;
    amount: number;
    blockhash: string;
}) => Promise<VersionedTransaction>;
