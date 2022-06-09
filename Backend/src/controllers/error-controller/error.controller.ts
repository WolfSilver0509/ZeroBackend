"use strict";

// UTILS
import prismaClientError from "./utils/prisma-client-error.util.js";

// TYPES
import { Prisma } from "@prisma/client";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import Code from "../../types/code-status.type";

// CLASS
import BaseError from "./utils/base-error.util.js";

const errorController = {
    logError: (error: ErrorRequestHandler) => {
        console.error(error);
    },
    logErrorMiddleware: (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
        errorController.logError(error);
        next(error);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    returnError: (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof BaseError) {
            const status = error.httpCode;
            const errorMessage = error.message;
            return res.status(status || 500).json({ status: status, message: errorMessage });
        }
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            const errorCatched = prismaClientError(error);
            const status = errorCatched.status;
            const errorMessage = errorCatched.message;
            return res.status(status || 500).json({ status: status, message: errorMessage });
        }
        if (error instanceof Error) {
            const status = Code.INTERNSERVERR;
            const errorMessage = "Internal server error";
            return res.status(status).json({ status: status, message: errorMessage });
        }
    },
    isOperationalError: (error: ErrorRequestHandler) => {
        if (error instanceof BaseError) {
            return error.isOperational;
        }
        return false;
    },
    get404: (req: Request, res: Response) => {
        const status = Code.NOTFOUND;
        const errorMessage = "Not Found";
        return res.status(status).json({ status: status, msg: errorMessage });
    },
};

export default errorController;