"use client";

import { AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlineLineStyle } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { Side_button } from "./button/Side_button";
import { IoClose } from "react-icons/io5";
import { useUIStore } from "@/app/store/uiStore";
import clsx from "clsx";

//import withUserValidation from "@/components/hoc/withUserValidation";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      <nav
        className={clsx(
          "fixed p-5 left-0 top-0 w-[300px] h-screen bg-blue-300 z-20 shadow-2xl transform transition-all duration-300",
          {
            "-translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        {/* Icono de cierre */}
        <div className="flex items-center justify-end">
          
            <IoClose  color="black" size={25} onClick={() => closeMenu()} />
         
        </div>
        <div>
          <small className="font-rajdhani text-xl font-semibold text-blue-700 m-2">
            Menu
          </small>
        </div>

        {/* Botones del menú */}
        <Side_button
          nombre="Consultas"
          icono={<AiOutlineFileSearch color="black" size={25}  />}
          ruta="/consultas"
        />

        <Side_button
          nombre="Registro de actividad"
          icono={<MdOutlineLineStyle  color="black" size={25} />}
          ruta="/actividad"
        />

        <Side_button
          nombre="Ayuda"
          icono={<MdHelpOutline  color="black" size={25} />}
          ruta="/ayuda"
        />
      </nav>
    </div>
  );
};

export default Sidebar;
