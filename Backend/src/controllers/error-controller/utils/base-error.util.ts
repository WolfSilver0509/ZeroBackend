"use strict";

import httpStatusCode from "../../../types/code-status.type.js";

class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: httpStatusCode;
    public readonly isOperational: boolean;

    constructor(name: string, httpCode: httpStatusCode, description: string, isOperational: boolean) {
        super(description);

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }
}

export default BaseError;