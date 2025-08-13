import { Connection, ConnectionConfig, SendOptions, Signer, Transaction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import EventEmitter from 'eventemitter3';
declare global {
    interface IWindowPhantom {
        solana: ISolana;
    }
    interface Window {
        coinbaseSolana?: ISolana;
        glowSolana?: ISolana;
        phantom?: IWindowPhantom;
        solana?: ISolana;
        solflare?: ISolana;
        backpack?: IBackpackSolanaSigner;
        magicEden?: {
            solana: ISolana;
        };
    }
}
type PublicKey = {
    toString: () => string;
};
export type ConnectionResult = {
    address?: string;
    publicKey?: PublicKey;
} | undefined;
export interface ISolanaEvents {
    connect(...args: unknown[]): unknown;
    disconnect(...args: unknown[]): unknown;
    accountChanged(publicKey: string): unknown;
    activeWalletDidChange(publicKey: string): unknown;
}
export type SignedMessage = {
    signature: Uint8Array;
};
type ExtensionLocators = {
    [key in ExtensionLocator]: boolean;
};
export type ISolanaSigner = ExtensionLocators & EventEmitter<ISolanaEvents> & {
    publicKey?: {
        toBytes(): Uint8Array;
    };
    isConnected: boolean;
    providers: ISolanaSigner[];
    signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
    signAndSendTransaction<T extends Transaction | VersionedTransaction>(transaction: T, options?: SendOptions): Promise<{
        signature: TransactionSignature;
    }>;
    signMessage(message: Uint8Array, encoding?: string): Promise<SignedMessage>;
    connect: (args?: {
        onlyIfTrusted: boolean;
    }) => Promise<ConnectionResult>;
    disconnect(): Promise<void>;
};
export type IBackpackSolanaSigner = ISolanaSigner & {
    send: (transaction: Transaction, signers?: Signer[], options?: SendOptions, connection?: Connection, publicKey?: PublicKey) => Promise<TransactionSignature>;
};
export type ISolana = ISolanaSigner | IBackpackSolanaSigner;
export type ExtensionLocator = 'isBraveWallet' | 'isGlow' | 'isPhantom' | 'isSolflare' | 'isExodus' | 'isBackpack' | 'isMagicEden';
export type SolanaConnectionConfig = ConnectionConfig & {
    customRpcUrls?: {
        solana?: string[];
        eclipse?: string[];
    };
};
export {};
