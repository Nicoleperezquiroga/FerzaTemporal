// Import all product images
import IconoCascos from "@/assets/Shop/Categorias/IconoCascos.png";
import IconoRemos from "@/assets/Shop/Categorias/IconoRemos.png";
import IconoSkates from "@/assets/Shop/Categorias/IconoSkates.png";
import IconoTablas from "@/assets/Shop/Categorias/IconoTablas.png";

export interface Categoria {
    id: string;
    name: string;
    image: string;
}

export const categorias: Categoria[] = [
    {
        id: "1",
        name: "remos",
        image: IconoRemos,
    },
    {
        id: "2",
        name: "tablas",
        image: IconoTablas,
    },
    {
        id: "3",
        name: "cascos",
        image: IconoCascos,
    }, 
    {
        id: "4",
        name: "skates",
        image: IconoSkates,
    },
];