"use strict";

// NPM MODULES
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// TYPES
import { User } from "@prisma/client";

// VAR ENV
const accessTokenAge = process.env.ACCESS_TOKEN_AGE;
const refreshTokenAge = process.env.REFRESH_TOKEN_AGE;

export const generateAccessToken = (user: User, accessTokenSecret: string) => {
    return jwt.sign({ username: user.username, userId: user.id }, accessTokenSecret, { expiresIn: accessTokenAge, subject: user.id.toString() });
};

export const generateRefreshToken = (user: User, refreshTokenSecret: string) => {
    return jwt.sign({ userId: user.id }, refreshTokenSecret, { expiresIn: refreshTokenAge, subject: user.id.toString() });
};