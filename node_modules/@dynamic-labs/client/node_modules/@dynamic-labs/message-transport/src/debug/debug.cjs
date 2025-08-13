'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Global debug flag that can be set to true to enable debug mode
 * for all resources that use the message transport.
 */
let globalDebugEnabled = false;
const setGlobalDebugEnabled = (debug) => {
    globalDebugEnabled = debug;
};
const isGlobalDebugEnabled = () => globalDebugEnabled;

exports.isGlobalDebugEnabled = isGlobalDebugEnabled;
exports.setGlobalDebugEnabled = setGlobalDebugEnabled;
