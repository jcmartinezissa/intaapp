"use client";

import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { UpdateDoc } from "@/actions/updatedocument";

interface ModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  docId: number;
  initialTitulo: string;
  initialContenido: string;
  initialCategoria: string;
  initialFecha: string;
}

const UpDocx = ({
  isOpen,
  onClose,
  docId,
  initialTitulo,
  initialContenido,
  initialCategoria,
  initialFecha,
}: ModalContentProps) => {
  const [titulo, setTitulo] = useState(initialTitulo);
  const [contenido, setContenido] = useState(initialContenido);
  const [categoria, setCategoria] = useState(initialCategoria);
  const [fecha, setFecha] = useState(initialFecha);

  useEffect(() => {
    if (isOpen) {
      setTitulo(initialTitulo);
      setContenido(initialContenido);
      setCategoria(initialCategoria);
      setFecha(initialFecha);
    }
  }, [isOpen, initialTitulo, initialContenido, initialCategoria, initialFecha]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await UpdateDoc(docId, titulo, contenido, categoria);
      if (response.ok) {
        alert(response.message);
        onClose(); // Cierra el modal si se actualiza con éxito
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error al actualizar documento:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <h3>Modificar documento</h3>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} className="lg:grid grid-col-1">
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
          <Button variant="flat" color="primary" onClick={handleSubmit}>
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

export default UpDocx;
