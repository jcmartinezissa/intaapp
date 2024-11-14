"use server";
import prisma from "@/app/lib/prisma";

export const UpdateDoc = async (id: number, titulo: string, contenido: string, categoria: string) => {
    try {
        const updatedDocument = await prisma.documentos.update({
            where: { id: id },
            data: {
                titulo: titulo,
                contenido: contenido,
                categoria: categoria
            }
        });
        
        return {
            ok: true,
            Document: updatedDocument,
            message: "Documento actualizado exitosamente",
        };
    } catch (error) {
        return {
            ok: false,
            Document: null,
            message: "Error al actualizar el documento: " + error           
        };
    }
};
