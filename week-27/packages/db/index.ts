declare const require: (moduleName: string) => any;

const { PrismaClient } = require("@prisma/client");

export const prismaClient = new PrismaClient();
