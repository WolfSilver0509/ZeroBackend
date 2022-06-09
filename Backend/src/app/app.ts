"use strict";

// UTILS
import cors from "../utils/cors.util.js";
import headerSecure from "../config/helmet.config.js";
import httpLogger from "../utils/http-logger.util.js";

// NPM MODULES
import express from "express";
import { join } from "path";
import express_enforces_ssl from "express-enforces-ssl";
import favicon from "serve-favicon";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";
import dotenv from "dotenv";
dotenv.config();

// CONTROLLERS
import errorController from "../controllers/error-controller/error.controller.js";

// VAR ENV
const baseUrl = process.env.BASE_URL;
const nodEnv = process.env.NODE_ENV;

const rootDir = process.cwd();

export const app = express();

app.use(cors.env(<Cors>nodEnv));

/* SECURITY */
app.enable("trust proxy");
app
    .use(headerSecure.csp)
    .use(headerSecure.expectCT)
    .use(headerSecure.xDnsPrefetchControl)
    .use(headerSecure.xFrameOptions)
    .use(headerSecure.xPoweredBy)
    .use(headerSecure.strictTransportSecurity)
    .use(headerSecure.xDownloadOptions)
    .use(headerSecure.xContentTypeOptions)
    // .use(headerSecure.referrerPolicy) // Not implementing referrerPolicy earns us points on mozilla observatory (check why ?). And that's optional header security.
    .use(headerSecure.xXssOrigin)
    .use(headerSecure.hsts);
// .use(express_enforces_ssl()); // To be activated only in production for a score of 110/100 on the mozilla observatory, otherwise the app is 80/100.

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use(favicon(join(rootDir, "public", "favicon", "favicon.ico")));

app.use(morgan("dev"));
app.use(httpLogger);

/* ROUTES */
app.use((req, res) => res.status(200).json({ status: 200, msg: "Hello You !" }));

app.use(errorController.get404);
app.use(errorController.logError);
app.use(errorController.returnError);