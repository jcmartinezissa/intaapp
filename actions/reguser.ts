"use server";

import prisma from "@/app/lib/prisma";
import { registros} from "@/interface/registros.interface";

export const RegUser = async (reg: registros) => {
  try {
    
const Registro = await prisma.registros.create({ data: reg });
    return {
      ok: true,
      registro: Registro,
      message: "Registro creado",
    };
  } catch (error) {
    return {
      ok: false,
      registro: null,
      message: "Error al crear el registro: "+error
    };
  }
};
