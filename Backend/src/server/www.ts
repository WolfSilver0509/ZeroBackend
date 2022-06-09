"use strict";

// UTILS
import Color from "../utils/color.util.js";

// CORE MODULES
import { createServer, Server } from "http";
import { EOL } from "os";

// NPM MODULES
import dotenv from "dotenv";
dotenv.config();

// EXPRESS APP
import { app } from "../app/app.js";

// TYPES
import { AddressInfo } from "net";

// VAR ENV
const defaultPort = process.env.PORT;
const configPort = process.env.PORT_CONFIG;


const normalizePort = (val: string) => {
    const port: number = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

const port: string | number | false = normalizePort(defaultPort || configPort);
app.set("port", port);

const errorHandler = (error: SystemError) => {
    if (error.syscall !== "listen") {
        throw error;
    }

    const address: string | AddressInfo = server.address();
    const bind: string = typeof address === "string" ? `pipe: ${address}` : `port: ${port}`;

    switch (error.code) {
        case "EACCESS":
            console.log(Color.error(`${bind} required elevated privileges`));
            break;
        case "EADDRINUSE":
            console.log(Color.error(`${bind} is already in use`));
            break;
        default:
            throw error;
    }
};

const server: Server = createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
    const address: string | AddressInfo = server.address();
    const bind: string = typeof address === "string" ? `pipe: ${address}` : `port: ${port}`;
    console.log(Color.success("Listening on " + bind));
});

server.listen(port);

process.on("SIGINT", () => {
    console.log(Color.warn(`${EOL}Server interrupted by 'SIGINT'`));
    process.exit(1);
});