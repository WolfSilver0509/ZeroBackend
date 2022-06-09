"use strict";

enum Code {
    OK = 200,
    CREATED = 201,
    REDIRECTED = 302,
    BADREQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOTFOUND = 404,
    CONFLICT = 409,
    INTERNSERVERR = 500,
}

export default Code;