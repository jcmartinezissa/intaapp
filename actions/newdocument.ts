"use server";

import prisma from "@/app/lib/prisma";
import { documentos} from "@/interface/documento.interface";

export const NewDocs = async (doc: documentos) => {
  try {
    const { id,...docWithoutId } = doc;  // Eliminamos el id para evitar conflictos al crear el documento
const Document = await prisma.documentos.create({ data: docWithoutId });
    return {
      ok: true,
      Document: Document,
      message: "Documento creado exitosamente",
    };
  } catch (error) {
    return {
      ok: false,
      Document: null,
      message: "Error al crear el documento: "+error
    };
    
  }
};
