import { RegUser } from "@/actions/reguser";


export async function RegistrarActividad(
  usuario: string,
  documentoId: number,
  documentoname: string,
  accion: string 
) {
  const registro = {
    documentoname,
    documentoId,
    usuario,
    timestamp: new Date(),
    accion,
  };

  try {
    const response = await RegUser(registro);
    if (response.ok) {
      console.log("Actividad registrada:", response.message);
    } else {
      console.error("Error al registrar actividad:", response.message);
    }
  } catch (error) {
    console.error("Error en la función de registro de actividad:", error);
  }
}
