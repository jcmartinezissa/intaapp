"use server";
import prisma from "@/app/lib/prisma";
import { documentos } from "@prisma/client";

export const ListDocs = async (): Promise<documentos[]> => {
  try {
    const docs = await prisma.documentos.findMany({
      take: 20,
      skip: 0,
    });
    return docs;
  } catch (error) {
    console.error("Error al obtener los datos:", error); 
    throw new Error("Error al obtener los datos");
  }
};
