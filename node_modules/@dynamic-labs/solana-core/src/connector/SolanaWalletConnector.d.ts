import { Connection } from '@solana/web3.js';
import { Chain, IHardwareWalletConnector, WalletConnectorBase, WalletMetadata } from '@dynamic-labs/wallet-connector-core';
import { GenericNetwork } from '@dynamic-labs/types';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api-core';
import { IChainRpcProviders } from '../rpc';
import { SolanaWallet } from '../wallet';
import { ISolana, SolanaConnectionConfig } from '../types';
export type SwitchNetworkOps = {
    networkChainId: number;
};
export type SolanaWalletConnectorOpts = {
    chainRpcProviders: IChainRpcProviders;
    solNetworks: GenericNetwork[];
    walletBook: WalletBookSchema;
    metadata?: WalletMetadata;
    connectionConfig?: SolanaConnectionConfig;
};
export declare abstract class SolanaWalletConnector extends WalletConnectorBase<typeof SolanaWallet> implements IHardwareWalletConnector {
    isHardwareWalletEnabled: boolean;
    verifiedCredentials: JwtVerifiedCredential[];
    solNetworks: GenericNetwork[];
    ChainWallet: typeof SolanaWallet;
    supportedChains: Chain[];
    connectedChain: Chain;
    protected connectionConfig: SolanaConnectionConfig | undefined;
    constructor(opts: SolanaWalletConnectorOpts);
    getNetworkId(): string;
    setNetworkId(networkId: string | null): void;
    getSelectedNetwork(): GenericNetwork | undefined;
    /**
     * @param returnDynamicNetworkId - If true, the dynamic network ID will be returned instead of the network cluster
     * @returns The network cluster (e.g. 'mainnet', 'testnet', 'devnet') or dynamic network (used for switching networks)
     */
    getNetwork(returnDynamicNetworkId?: boolean): Promise<string>;
    switchNetwork({ networkChainId, }: SwitchNetworkOps): Promise<void>;
    endSession(): Promise<void>;
    getWalletClient(): Connection;
    getPublicClient(): Promise<Connection | undefined>;
    abstract getSigner(): Promise<ISolana | undefined>;
    abstract connect(): Promise<void>;
    getBalance(address: string): Promise<string | undefined>;
    lamportsToSol(lamports: number): number;
    canConnectWithHardwareWallet(): boolean;
    signMessage(messageToSign: string): Promise<string | undefined>;
    proveOwnership(address: string, messageToSign: string): Promise<string | undefined>;
    signMessageViaTransaction(messageToSign: string): Promise<string>;
    private buildAuthTx;
    setVerifiedCredentials(verifiedCredentials: JwtVerifiedCredential[]): void;
    isLedgerAddress(address: string): boolean;
    getBlockExplorerUrlsForCurrentNetwork(): Promise<string[]>;
    getEnabledNetworks(): GenericNetwork[];
    supportsNetworkSwitching(): boolean;
}
