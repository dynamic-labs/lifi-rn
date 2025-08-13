import { Address, CustomTransport, Hex, RpcTransactionRequest, Transport } from 'viem';
type Provider = Pick<ReturnType<CustomTransport>, 'request'>;
export type InterceptTransportProps = {
    transport: Transport;
    getAccounts?: (props: {
        provider: Provider;
    }) => Promise<Address[]>;
    onPersonalSign?: (props: {
        message: Hex;
        args: Args;
        provider: Provider;
    }) => Promise<string>;
    onSendTransaction?: (props: {
        transaction: RpcTransactionRequest;
        args: Args;
        provider: Provider;
    }) => Promise<Hex>;
    onSignTypedData?: (props: {
        message: string;
        args: Args;
        provider: Provider;
    }) => Promise<string>;
};
type Args = {
    method: string;
    params: unknown[];
};
export declare const interceptTransport: ({ getAccounts, onPersonalSign, onSendTransaction, onSignTypedData, transport, }: InterceptTransportProps) => CustomTransport;
export {};
