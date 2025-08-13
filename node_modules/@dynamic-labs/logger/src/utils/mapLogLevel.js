'use client'
import { LogLevel } from '../types.js';

const mapLogLevel = (level) => {
    if (level in LogLevel && typeof level === 'string') {
        return LogLevel[level];
    }
    else if (level in LogLevel && typeof level === 'number') {
        return level;
    }
    else {
        throw new Error(`Invalid log level: ${level}`);
    }
};

export { mapLogLevel };
