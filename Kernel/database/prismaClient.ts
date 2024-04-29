import { PrismaClient } from '@prisma/client'; 

let prismaClient: PrismaClient;

prismaClient = new PrismaClient();

if (process.env.APP_MODE === 'test') {    
    const prismaTest = new PrismaClient({
        datasources: {
            db: {
                url: process.env.DATABASE_TEST_URL,
            },
        },
    });

    prismaClient = prismaTest;
}

export { prismaClient };