"use server";
import prisma from "@/app/lib/prisma";

export const DeleteDoc = async (id: number) => {
    try {
        const Document = await prisma.documentos.delete({
            where: {
                id,
            },
        });
        return {
            ok: true,
            Document: Document,
            message: "Documento eliminado exitosamente",
        };
    } catch (error) {
        return {
            ok: false,
            Document: null,
            message: "Error al eliminar el documento: "+error           
        };
        
    }
}