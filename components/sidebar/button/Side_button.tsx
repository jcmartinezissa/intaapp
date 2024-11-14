import { useUIStore } from "@/app/store/uiStore";
import Link from "next/link";

interface Props {
  nombre: string,
  icono: JSX.Element,
  ruta: string, 
}
export const Side_button = ( { nombre, icono, ruta }: Props) => {
    const closeMenu=useUIStore(state => state.closeSideMenu)

  return (
    <div>  
        <Link
        href={ruta}
        className="flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all"
        onClick={()=>closeMenu()}>
            {icono}
            <span className="ml-2 text-sm text-black">{nombre}</span>
        </Link>
    </div>
  )
}


