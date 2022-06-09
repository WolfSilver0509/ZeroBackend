"use strict";

// NPM MODULE
import bcrypt from "bcrypt";
import { PrismaClient, Role } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

const password = process.env.ADMIN_PWD;

const createSuperAdmin = async () => {
    console.log("Start seeding...");
    const hash = await bcrypt.hash(password, 12);
    const superAdmin = await prisma.user.create({
        data: {
            email: "rudy.waks@gmail.com",
            username: "mrwaks",
            password: hash,
            role: Role.SUPER_ADMIN
        }
    });
    console.log(`Created super-admin with id=${superAdmin.id}`);
    console.log("Seeding finished");
};

createSuperAdmin()
    .catch(error => {
        console.log(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });