import { PrismaClient } from "@/generated/prisma/client";
import {PrismaPg} from '@prisma/adapter-pg'
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL
});
export const prisma = new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;


// Database connection logging
const handleConnection = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ Database connection failed:', errorMessage);
    process.exit(1);
  }
};

handleConnection();
