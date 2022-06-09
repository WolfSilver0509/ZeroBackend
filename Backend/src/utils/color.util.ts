"use strict";

class Color {
    static success = (str: string) => {
        return `\x1b[32m${str}\x1b[0m`;
    };
    static warn = (str: string) => {
        return `\x1b[33m${str}\x1b[0m`;
    };
    static error = (str: string) => {
        return `\x1b[31m${str}\x1b[0m`;
    };
}

export default Color;