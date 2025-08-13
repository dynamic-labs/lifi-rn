'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('../../constants.cjs');

const getGenesisHashLSKey = (rpcEndpoint) => `${rpcEndpoint}_${constants.SOLANA_GENESIS_HASH}`;

exports.getGenesisHashLSKey = getGenesisHashLSKey;
