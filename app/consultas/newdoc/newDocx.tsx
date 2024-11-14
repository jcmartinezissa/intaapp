"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { NewDocs } from "@/actions/newdocument";
import { RegistrarActividad } from "@/components/registrarActividad";


interface ModalContentProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewDocx = ({ isOpen, onClose }: ModalContentProps) => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");

  const HandleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const docData = { 
      id: 0,
      titulo,
      contenido,
      fecha: new Date(fecha),
      categoria,
    };

    try {
      const response = await NewDocs(docData);
      if (response.ok) {
        alert(response.message);

        // Llama a registrarActividad para registrar la creación
        await RegistrarActividad("SILVIA RUIZ", docData.id , docData.titulo, "Nuevo documento");
        
        onClose(); // Cierra el modal si se inserta con éxito
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error al crear documento:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <h3>Nuevo documento</h3>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={HandleSubmit} className="lg:grid grid-col-1">
            <div className="flex flex-col space-y-3">
              <Input
                size="md"
                type="text"
                label="Titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <Input
                size="md"
                type="text"
                label="Enlace al documento"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
              />
              <Input
                size="md"
                type="text"
                label="Categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
              <Input
                size="md"
                type="date"
                label="Fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="flat" color="primary" type="submit" onClick={HandleSubmit}>
            Guardar
          </Button>
          <Button variant="flat" color="danger" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewDocx;
