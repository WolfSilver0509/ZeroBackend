"use strict";

import helmet from "helmet";

const sixMonthInSeconds = 15768000;

const headerSecure = {

    csp: helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "script-src": ["'self'", "https://b7a743452329.ngrok.io/api/products"],
            "style-src": null,
        },
    }),

    expectCT: helmet.expectCt({
        maxAge: 96400,
        enforce: true,
        reportUri: "https://b7a743452329.ngrok.io/report",
    }),

    xDnsPrefetchControl: helmet.dnsPrefetchControl({
        allow: true,
    }),

    xFrameOptions: helmet.frameguard({
        action: "deny",
    }),

    xPoweredBy: helmet.hidePoweredBy(),

    strictTransportSecurity: helmet.hsts({
        maxAge: 123456,
        includeSubDomains: false,
    }),

    xDownloadOptions: helmet.ieNoOpen(),

    xContentTypeOptions: helmet.noSniff(),

    referrerPolicy: helmet.referrerPolicy({
        policy: ["origin", "unsafe-url"],
    }),

    xXssOrigin: helmet.xssFilter(),

    hsts: helmet.hsts({ maxAge: sixMonthInSeconds }),

};

export default headerSecure;