'use client'
/**
 * Global debug flag that can be set to true to enable debug mode
 * for all resources that use the message transport.
 */
let globalDebugEnabled = false;
const setGlobalDebugEnabled = (debug) => {
    globalDebugEnabled = debug;
};
const isGlobalDebugEnabled = () => globalDebugEnabled;

export { isGlobalDebugEnabled, setGlobalDebugEnabled };
