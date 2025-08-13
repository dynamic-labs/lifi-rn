'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';
import { TransactionMessage, SystemProgram, PublicKey, VersionedTransaction } from '@solana/web3.js';
import { solToLamports } from '@dynamic-labs/utils';

const createSolTransfer = (_a) => __awaiter(void 0, [_a], void 0, function* ({ fromAddress, toAddress, amount, blockhash, }) {
    const message = new TransactionMessage({
        instructions: [
            SystemProgram.transfer({
                fromPubkey: new PublicKey(fromAddress),
                lamports: Math.round(solToLamports(amount)),
                toPubkey: new PublicKey(toAddress),
            }),
        ],
        payerKey: new PublicKey(fromAddress),
        recentBlockhash: blockhash,
    }).compileToV0Message();
    return new VersionedTransaction(message);
});

export { createSolTransfer };
