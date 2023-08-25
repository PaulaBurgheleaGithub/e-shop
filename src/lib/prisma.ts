import { PrismaClient } from "@prisma/client";

declare global {
   const prisma: PrismaClient;
}

export const prisma =
   global.prisma ||
   new PrismaClient({
      log: [],
   });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
