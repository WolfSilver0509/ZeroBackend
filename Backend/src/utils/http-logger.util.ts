"use strict";

import morgan from "morgan";
import json from "morgan-json";
import logger from "../config/winston.config.js";

const format = json({
    method: ':method',
    url: ':url',
    status: ':status',
    contentLength: ':res[content-length]',
    responseTime: ':response-time'
});

const httpLogger = morgan(format, {
    stream: {
        write: (message) => {
            const { method, url, status, contentLength, responseTime } = JSON.parse(message);

            logger.info("HTTP Access Log", {
                timestamp: new Date().toString(),
                method,
                url,
                status: +status,
                contentLength,
                responseTime: +responseTime
            });
        }
    }
});

export default httpLogger;