"use strict";

import BaseError from "./base-error.util.js";
import httpStatusCode from "../../../types/code-status.type.js";

export class HTTP400Error extends BaseError {
    constructor(description = "Bad request") {
        super("BAD REQUEST", httpStatusCode.BADREQUEST, description, true);
    }
}

export class HTTP401Error extends BaseError {
    constructor(description = "Unauthorized") {
        super("UNAUTHORIZED", httpStatusCode.UNAUTHORIZED, description, true);
    }
}

export class HTTP403Error extends BaseError {
    constructor(description = "Forbidden") {
        super("FORBIDDEN", httpStatusCode.FORBIDDEN, description, true);
    }
}

export class HTTP404Error extends BaseError {
    constructor(description = "Not found") {
        super("NOT FOUND", httpStatusCode.NOTFOUND, description, true);
    }
}

export class HTTP500Error extends BaseError {
    constructor(description = "Internal server error") {
        super("INTERNAL SERVER ERROR", httpStatusCode.INTERNSERVERR, description, true);
    }
}