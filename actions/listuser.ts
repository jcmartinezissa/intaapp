"use server";

import prisma from "@/app/lib/prisma";
import { registros } from "@prisma/client";

export const ListReg = async (): Promise<registros[]> => {
  try {
    const reg = await prisma.registros.findMany({
      take: 20,
      skip: 0,
    });
    return reg;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw new Error("Error al obtener los datos");
  }
};
