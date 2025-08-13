import type { GenericNetwork } from '@dynamic-labs/types';
import type { SolanaConnectionConfig } from '../../types';
export declare const getBackwardsCompatibleSolNetworks: (originalSolNetworks: GenericNetwork[], connectionConfig?: SolanaConnectionConfig) => GenericNetwork[];
