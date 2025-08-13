'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Returns a JSON.stringify replacer that safely skips circular references.
 */
const createCircularReferenceReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value))
                return;
            seen.add(value);
        }
        return value;
    };
};

exports.createCircularReferenceReplacer = createCircularReferenceReplacer;
