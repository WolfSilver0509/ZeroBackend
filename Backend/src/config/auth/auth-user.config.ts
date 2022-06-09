"use strict";

// NPM MODULES
import jwt from "jsonwebtoken";

// TYPES
import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import Code from "../../types/code-status.type.js";

const authUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessTokenSecretUsers = process.env.ACCESS_TOKEN_SECRET_USERS;
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.status(Code.FORBIDDEN).send("<h2>Error 403 - Forbidden</h2>");
        }

        const accessToken = authorizationHeader.split(" ")[1];
        jwt.verify(accessToken, accessTokenSecretUsers, (error: unknown, user: string | JwtPayload) => {
            if (error instanceof Error) {
                return res.status(Code.UNAUTHORIZED).json({ message: "Error 401 - Unauthorized (Invalid Token)" });
            }

            req.user = user;
            next();
        });
    } catch (error) {
        res.status(Code.INTERNSERVERR).send("<h2>Error 500 - Internal Server Error</h2>");
    }
};

export default authUser;