"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { MdOutlineLineStyle } from "react-icons/md";
import { ListReg } from "@/actions/listuser";
import { registros } from "@/interface/registros.interface";
import { useState, useEffect } from "react";

const Page = () => {
  const [regAct, setRegAct]= useState<registros[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await ListReg();
        setRegAct(list);
      } catch (error) {
        console.error("Error fetching actividad:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 w-full h-full p-6">
      <p className="p-2 text-lg font-semibold flex">
        <MdOutlineLineStyle size={25} color="black" /> Registro de actividad
      </p>
      <small className="p-1 text-gray-500"></small>
      <div>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Usuario</TableColumn>
            <TableColumn>Documento</TableColumn>
            <TableColumn>Actividad</TableColumn>
            <TableColumn>Fecha hora</TableColumn>
          </TableHeader>
          <TableBody>
            {regAct.map((item)=>(
              <TableRow key={item.documentoId}>
                <TableCell>{item.usuario}</TableCell>
                <TableCell>{item.documentoname}</TableCell>
                <TableCell>{item.accion}</TableCell>
                <TableCell>{item.timestamp.toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
