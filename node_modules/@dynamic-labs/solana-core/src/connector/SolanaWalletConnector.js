'use client'
import { __awaiter } from '../../_virtual/_tslib.js';
import { PublicKey, Connection, Transaction, TransactionInstruction } from '@solana/web3.js';
import { WalletConnectorBase } from '@dynamic-labs/wallet-connector-core';
import { DynamicError, isLedgerAddressViaVerifiedCredentials, NotSupportedError } from '@dynamic-labs/utils';
import { SolanaWallet } from '../wallet/SolanaWallet.js';
import { extractNonce } from '../utils/extractNonce/extractNonce.js';
import { getOverrideRpcUrlForNetwork } from '../utils/getOverrideRpcUrlForNetwork/getOverrideRpcUrlForNetwork.js';
import '@solana/spl-token';
import { DYNAMIC_SVM_NETWORK_ID_LS_KEY } from '../constants.js';
import { getBackwardsCompatibleSolNetworks } from '../utils/getBackwardsCompatibleSolNetworks/getBackwardsCompatibleSolNetworks.js';

const MEMO_PROGRAM_ID = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');
class SolanaWalletConnector extends WalletConnectorBase {
    constructor(opts) {
        var _a;
        super(opts);
        this.isHardwareWalletEnabled = false;
        this.verifiedCredentials = [];
        this.ChainWallet = SolanaWallet;
        this.supportedChains = ['SOL'];
        this.connectedChain = 'SOL';
        this.solNetworks = getBackwardsCompatibleSolNetworks(opts.solNetworks, opts.connectionConfig);
        this.chainRpcProviders = opts.chainRpcProviders;
        this.connectionConfig = opts.connectionConfig;
        (_a = this.chainRpcProviders) === null || _a === void 0 ? void 0 : _a.registerSolanaProviders(this.connectionConfig);
    }
    getNetworkId() {
        var _a;
        const defaultChainId = (_a = this.solNetworks[0]) === null || _a === void 0 ? void 0 : _a.networkId.toString();
        const storedChainId = localStorage.getItem(DYNAMIC_SVM_NETWORK_ID_LS_KEY);
        return storedChainId !== null && storedChainId !== void 0 ? storedChainId : defaultChainId;
    }
    setNetworkId(networkId) {
        if (!networkId) {
            localStorage.removeItem(DYNAMIC_SVM_NETWORK_ID_LS_KEY);
        }
        else {
            localStorage.setItem(DYNAMIC_SVM_NETWORK_ID_LS_KEY, networkId);
        }
    }
    getSelectedNetwork() {
        const selectedNetwork = this.solNetworks.find((network) => network.networkId.toString() === this.getNetworkId());
        return selectedNetwork;
    }
    /**
     * @param returnDynamicNetworkId - If true, the dynamic network ID will be returned instead of the network cluster
     * @returns The network cluster (e.g. 'mainnet', 'testnet', 'devnet') or dynamic network (used for switching networks)
     */
    getNetwork() {
        return __awaiter(this, arguments, void 0, function* (returnDynamicNetworkId = false) {
            const network = this.getSelectedNetwork();
            if (!network) {
                return '';
            }
            const { networkId, genesisHash } = network;
            if (returnDynamicNetworkId) {
                return networkId.toString();
            }
            // to keep backward compatibility with old network values
            if (genesisHash === '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp') {
                return 'mainnet';
            }
            if (genesisHash === '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z') {
                return 'testnet';
            }
            if (genesisHash === 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1') {
                return 'devnet';
            }
            // if it's not one of the main solana networks, return the network id
            // this should be ok because we didn't have support for other SVM networks before
            return networkId.toString();
        });
    }
    switchNetwork(_a) {
        return __awaiter(this, arguments, void 0, function* ({ networkChainId, }) {
            if (!networkChainId)
                return;
            const networkIdString = networkChainId.toString();
            const isNetworkIdValid = this.solNetworks.some((network) => network.networkId.toString() === networkIdString);
            if (!isNetworkIdValid) {
                return;
            }
            this.setNetworkId(networkIdString);
            this.emit('chainChange', { chain: networkIdString });
        });
    }
    endSession() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setNetworkId(null);
            const signer = yield this.getSigner();
            if (signer) {
                yield signer.disconnect();
            }
        });
    }
    getWalletClient() {
        var _a;
        const network = this.getSelectedNetwork();
        if (!network) {
            throw new DynamicError('No enabled networks');
        }
        const rpcUrl = getOverrideRpcUrlForNetwork(this.connectionConfig, network);
        return new Connection(rpcUrl, (_a = this.connectionConfig) !== null && _a !== void 0 ? _a : 'confirmed');
    }
    getPublicClient() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const network = this.getSelectedNetwork();
            if (!network) {
                return;
            }
            const networkId = network.networkId.toString();
            const configurations = {
                cosmos: [],
                evm: undefined,
                solana: this.solNetworks,
                starknet: undefined,
            };
            if (!this.chainRpcProviders)
                return undefined;
            const providers = this.chainRpcProviders.getProviders(configurations);
            return (_a = this.chainRpcProviders.getSolanaProviderByChainId(providers, networkId)) === null || _a === void 0 ? void 0 : _a.provider;
        });
    }
    getBalance(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicKey = new PublicKey(address);
            const balance = this.lamportsToSol(yield this.getWalletClient().getBalance(publicKey));
            return balance.toString();
        });
    }
    // Solana uses lamports as the smallest unit of currency. This converts lamports to SOL.
    lamportsToSol(lamports) {
        return lamports / 1000000000;
    }
    canConnectWithHardwareWallet() {
        var _a;
        return Boolean((_a = this.metadata.supportedHardwareWallets) === null || _a === void 0 ? void 0 : _a.includes('ledger'));
    }
    signMessage(messageToSign) {
        const _super = Object.create(null, {
            signMessage: { get: () => super.signMessage }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isHardwareWalletEnabled) {
                throw new NotSupportedError(`Message signing is currently not supported on ${this.name} hardware wallet.
          You can use signMessageViaTransaction instead to achieve similar functionality
          by signing a transaction with a memo instruction.
          You can read more about it here https://github.com/solana-labs/solana/issues/21366`);
            }
            return _super.signMessage.call(this, messageToSign);
        });
    }
    proveOwnership(address, messageToSign) {
        const _super = Object.create(null, {
            proveOwnership: { get: () => super.proveOwnership }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateActiveWallet(address);
            if (this.isHardwareWalletEnabled) {
                const nonce = extractNonce(messageToSign);
                if (!nonce) {
                    throw new DynamicError('Nonce missing');
                }
                return this.signMessageViaTransaction(nonce);
            }
            return _super.proveOwnership.call(this, address, messageToSign);
        });
    }
    signMessageViaTransaction(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.getAddress();
            if (!address) {
                throw new DynamicError('Address missing');
            }
            const transaction = this.buildAuthTx(messageToSign);
            transaction.feePayer = new PublicKey(address);
            transaction.recentBlockhash = (yield this.getWalletClient().getLatestBlockhash()).blockhash;
            const signer = yield this.getSigner();
            if (!signer) {
                throw new DynamicError('Signer not found');
            }
            const signedTransaction = yield signer.signTransaction(transaction);
            const serializedSignedTransaction = signedTransaction.serialize();
            /**
             * Serializing the transaction and adding the type 'Buffer' is required
             * when connecting with backpack + Ledger, because the returned object is not correctly
             * serialized
             */
            return JSON.stringify({
                signedTransaction: {
                    data: Array.from(serializedSignedTransaction),
                    type: 'Buffer',
                },
            });
        });
    }
    buildAuthTx(message) {
        const transaction = new Transaction();
        transaction.add(new TransactionInstruction({
            data: Buffer.from(message, 'utf8'),
            keys: [],
            programId: MEMO_PROGRAM_ID,
        }));
        return transaction;
    }
    setVerifiedCredentials(verifiedCredentials) {
        this.verifiedCredentials = verifiedCredentials;
    }
    isLedgerAddress(address) {
        return isLedgerAddressViaVerifiedCredentials(address, this.verifiedCredentials);
    }
    getBlockExplorerUrlsForCurrentNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const network = this.getSelectedNetwork();
            if (!network) {
                return [];
            }
            return network.blockExplorerUrls;
        });
    }
    getEnabledNetworks() {
        return this.solNetworks;
    }
    supportsNetworkSwitching() {
        return true;
    }
}

export { SolanaWalletConnector };
