'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var types = require('../types.cjs');

const mapLogLevel = (level) => {
    if (level in types.LogLevel && typeof level === 'string') {
        return types.LogLevel[level];
    }
    else if (level in types.LogLevel && typeof level === 'number') {
        return level;
    }
    else {
        throw new Error(`Invalid log level: ${level}`);
    }
};

exports.mapLogLevel = mapLogLevel;
