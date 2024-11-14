import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "development") {
  prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"], // Agrega logs en desarrollo
  });
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient({
      log: ["error"], // Solo errores en producción
    });
  }
  prisma = (global as any).prisma;
}

export default prisma;
