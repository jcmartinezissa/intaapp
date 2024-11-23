"use client";

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useUIStore } from "@/app/store/uiStore";
import logo from "@/assets/img/book.png";
import Image from "next/image";

export const Topmenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  return (
    <div className="flex justify-between items-center w-full bg-blue-300 p-1 antialiased text-gray-800">
      <RxHamburgerMenu size={25} onClick={() => openSideMenu()} />
      <h1 className="text-xl font-extraligh">Patri-App - Guia de procesos</h1>
      <Image src={logo} alt="Logo de la empresa" width={100} height={100} />
    </div>
  );
};
export default Topmenu;
