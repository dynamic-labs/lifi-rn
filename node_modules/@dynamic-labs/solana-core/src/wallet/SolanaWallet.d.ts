import { Connection } from '@solana/web3.js';
import { Wallet } from '@dynamic-labs/wallet-connector-core';
import { SolanaWalletConnector } from '../connector';
import { ISolana } from '../types';
export declare class SolanaWallet extends Wallet<SolanaWalletConnector> {
    /**
     * Sends the native balance of the wallet to the given address.
     * @param amount - The amount of balance to send (in SOL).
     * @param toAddress - The address to send the balance to.
     * @returns The signature of the sent transaction.
     */
    sendBalance({ amount, toAddress, token, }: {
        amount: string;
        toAddress: string;
        token?: {
            address: string;
            decimals?: number;
        };
    }): Promise<string | undefined>;
    /**
     * Retrieves the RPC connection
     * @returns A promise that resolves to the RPC connection
     */
    getConnection(): Promise<Connection>;
    /**
     * Retrieves the solana signer for the wallet.
     * @returns A promise that resolves to the signer,
     * or throws an error if the signer cannot be retrieved.
     */
    getSigner(): Promise<ISolana>;
}
