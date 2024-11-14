"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
} from "@nextui-org/react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { ListDocs } from "@/actions/listdocument";
import { useEffect, useState } from "react";
import { documentos } from "@/interface/documento.interface";
import { useDisclosure } from "@nextui-org/react";
import NewDocx from "./newdoc/newDocx";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import UpDocx from "./updoc/upDocx";
import { DeleteDoc } from "@/actions/deletedocument";
import { RegistrarActividad } from "@/components/registrarActividad";

export default function Consultas() {
  const [doc, setDoc] = useState<documentos[]>([]);
  const [searchText, setSearchText] = useState("");
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
  const [selectedDoc, setSelectedDoc] = useState<documentos | null>(null);

  // acceder documento
  async function AccederDocumento(documentoId: number, usuario: string, titulo: string) {
    await RegistrarActividad(usuario, documentoId, titulo, "Accede a documento");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await ListDocs();
        setDoc(list);
        console.log(list);
      } catch (error) {
        console.error("Error fetching doc:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (item: documentos) => {
    setSelectedDoc(item);
    onEditOpen();
  };

  // Filtrar los documentos según el texto de búsqueda
  const filteredDocs = doc.filter((item) =>
    item.titulo.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <NewDocx isOpen={isAddOpen} onClose={onAddClose} />
      {selectedDoc && (
        <UpDocx
          isOpen={isEditOpen}
          onClose={() => {
            onEditClose();
            setSelectedDoc(null);
          }}
          docId={selectedDoc.id}
          initialTitulo={selectedDoc.titulo}
          initialContenido={selectedDoc.contenido}
          initialCategoria={selectedDoc.categoria}
          initialFecha={selectedDoc.fecha.toISOString().split("T")[0]}
        />
      )}

      <div className="bg-gray-100 w-full h-full p-6">
        <p className="p-2 text-lg font-semibold flex">
          <AiOutlineFileSearch color="black" size={25}  /> Consultas
        </p>
        <small className="p-1 text-gray-500">
          Toque el elemento en la lista para ver su contenido
        </small>
        <div className="flex justify-between items-center">
          <Button className="bg-green-400" onClick={onAddOpen}>
            <IoMdAddCircleOutline
              size={40}
              className="text-green-800 m-2"
              title="Agregar un nuevo documento"
            />
            Nuevo
          </Button>
          <Input color="primary"
            className="p-1 m-1"
            type="search"
            label="Buscar"
            placeholder="Ingrese el texto a buscar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableColumn>Título</TableColumn>
              <TableColumn>Categoría</TableColumn>
              <TableColumn>Fecha</TableColumn>
              <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody emptyContent="No hay datos">
              {filteredDocs.map((item) => (
                <TableRow key={item.id} className="hover:bg-blue-100 rounded-sm">
                  <TableCell className="text-[0.80rem] text-gray-700 antialiased">
                    {item.titulo}
                  </TableCell>
                  <TableCell className="text-[0.80rem] text-gray-700 antialiased">
                    {item.categoria}
                  </TableCell>
                  <TableCell className="text-[0.80rem] text-gray-700 antialiased">
                    {item.fecha.toLocaleDateString()}
                  </TableCell>
                  <TableCell className="inline-flex">
                    <Link href={item.contenido} target="_blank">
                      <FiEye
                        className="mx-1 text-blue-600"
                        size={20}
                        title="Ver"
                        onClick={() => AccederDocumento(item.id, "SILVIA RUIZ", item.titulo)}
                      />
                    </Link>
                    <TbEdit
                      className="mx-1 text-yellow-500"
                      size={20}
                      title="Modificar"
                      onClick={() => handleEditClick(item)}
                    />
                    <RiDeleteBinLine
                      className="mx-1 text-red-600"
                      size={20}
                      title="Eliminar"
                      onClick={() => DeleteDoc(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
