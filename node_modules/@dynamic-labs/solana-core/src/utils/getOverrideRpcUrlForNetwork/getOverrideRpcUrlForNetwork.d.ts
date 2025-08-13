import { GenericNetwork } from '@dynamic-labs/types';
import { SolanaConnectionConfig } from '../../types';
export declare const getOverrideRpcUrlForNetwork: (connectionConfig: SolanaConnectionConfig | undefined, network: GenericNetwork) => string;
