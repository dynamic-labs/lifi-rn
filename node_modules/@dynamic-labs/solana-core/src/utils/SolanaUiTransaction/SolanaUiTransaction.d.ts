import { Connection, Transaction, VersionedTransaction } from '@solana/web3.js';
import { IUITransaction, IUITransactionFormatOptions } from '@dynamic-labs/types';
export declare const LAMPORTS_PER_SOL = 1000000000;
type SolanaUiTransactionProps = {
    from: string;
    connection: Connection;
    onSubmit: (transaction?: Transaction | VersionedTransaction) => Promise<any>;
    multipleTransactions?: (Transaction | VersionedTransaction)[];
};
export declare class SolanaUiTransaction implements IUITransaction {
    to: string | undefined;
    from: string;
    value: bigint | undefined;
    chain: string;
    receipt: string | undefined;
    data: undefined;
    fee: {
        gas: bigint | undefined;
    };
    multipleTransactions?: (Transaction | VersionedTransaction)[];
    nonNativeAddress?: string;
    nonNativeDecimal?: number;
    nonNativeValue?: bigint;
    private onSubmit;
    private connection;
    constructor({ onSubmit, from, connection, multipleTransactions, }: SolanaUiTransactionProps);
    nativePrice?: number | undefined;
    fetchFee(): Promise<void>;
    isGasSponsored(): boolean;
    parse(input: string): bigint;
    parseNonNativeToken(input: string, decimals: number): bigint;
    formatNonNativeToken: (value: bigint, decimals: number) => string;
    format(value: bigint, { precision }?: IUITransactionFormatOptions): string;
    submit(): Promise<any>;
    getBalance(): Promise<bigint>;
    validateAddressFormat(address: string): boolean;
    private createTransaction;
    private createTransactionSafe;
}
export {};
