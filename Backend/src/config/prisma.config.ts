"use strict";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    rejectOnNotFound: {
        findUnique: true,
        findFirst: true,
    },
    errorFormat: "pretty",
    log: ["info", "query", "warn", "error"]
});

export default prisma;