import { MdHelpOutline } from "react-icons/md";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-gray-100 w-full h-full p-6">
      <p className="p-2 text-lg font-semibold flex">
        <MdHelpOutline color="black" size={25} /> Ayuda
      </p>
      <small className="p-1 text-gray-500">
        Aquí encontrarás información útil sobre cómo usar nuestra herramienta de
        procesos.
      </small>
      <div className="m-2 p-2 text-gray-700 text-[0.8rem]">
        <p className="m-2 p-2">
          1. Descripción General Esta aplicación permite gestionar documentos de
          manera sencilla. Desde aquí puedes agregar, buscar, ver, modificar y
          eliminar documentos según sea necesario.
        </p>
        <p className="m-2 p-2">
          2. Funcionalidades Principales Buscar Documentos: Usa el campo de
          búsqueda en la parte superior para encontrar documentos por título. A
          medida que escribas, la lista se filtrará automáticamente para mostrar
          los resultados que coincidan. Agregar un Nuevo Documento: Haz clic en
          el botón "Nuevo" para abrir el formulario de creación de documentos.
          Rellena los campos solicitados y guarda el documento. Ver Documento:
          Haz clic en el icono del ojo junto a cada documento para abrir su
          contenido en una nueva ventana. Modificar Documento: Selecciona el
          ícono de lápiz para editar el contenido de un documento. Esto abrirá
          un modal donde puedes actualizar los campos que desees. Eliminar
          Documento: Haz clic en el icono de la papelera para borrar un
          documento de la lista.
        </p>
        <p className="m-2 p-2">
          3. Solución de Problemas No Aparecen Documentos: Si la lista está
          vacía o el documento no aparece después de realizar una búsqueda,
          verifica que el título sea el correcto. No se Pueden Modificar
          Documentos: Asegúrate de haber seleccionado el icono de lápiz. Si el
          modal no se abre, intenta actualizar la página.
        </p>
        <p className="m-2 p-2">
          4. Contacto Si tienes alguna otra duda, puedes comunicarte con nuestro
          equipo de soporte a través del formulario de contacto en nuestra
          página soporte.
        </p>
        <div className="flex flex-col shadow-sm shadow-gray-400 m-2 p-5">
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">Proyecto: </h2>{" "}
            <p> PATRI APP : 2024</p>
          </div>
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">Version: </h2>{" "}
            <p> 1.0</p>
          </div>
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">Autor: </h2>{" "}
            <p>SILVIA RUIZ</p>
          </div>
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">Desarrollo: </h2>{" "}
            <p> JUAN CARLOS MARTINEZ ISSA</p>
          </div>
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">Editor: </h2>{" "}
            <p> Visual Studio code v.1.86.2</p>
          </div>
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">Framework: </h2>{" "}
            <p> NextJS v.14.2.4</p>
          </div>
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">
              Biblioteca de interfaz de usuario:{" "}
            </h2>{" "}
            <p> NextUI v.2.4.0</p>
          </div>
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">
              Motor de base de datos:{" "}
            </h2>{" "}
            <p> MySql server v.8.0.31</p>
          </div>
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">
              Almacenamiento en la nube:{" "}
            </h2>{" "}
            <p> Google Driver v.99.0.0.0</p>
          </div>
          <div className="inline-flex">
            <h2 className="font-semibold text-blue-900 mx-1">
              Repositorio GitHub:{" "}
            </h2>
            <a
              href="https://github.com/jcmartinezissa/intaapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver repositorio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
