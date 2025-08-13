'use client'
import { SOLANA_GENESIS_HASH } from '../../constants.js';

const getGenesisHashLSKey = (rpcEndpoint) => `${rpcEndpoint}_${SOLANA_GENESIS_HASH}`;

export { getGenesisHashLSKey };
