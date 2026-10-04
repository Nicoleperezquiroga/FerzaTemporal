// Import all product images
import imgDestacada1 from "@/assets/Shop/ImagenesDestacadas/imgDestacada1.png";
import imgDestacada2 from "@/assets/Shop/ImagenesDestacadas/imgDestacada2.png";
import imgDestacada3 from "@/assets/Shop/ImagenesDestacadas/imgDestacada3.png";

export interface ImagenesDestacadas {
    id: string;
    name: string;
    image: string;
}

export const imaganesDestacadas: ImagenesDestacadas[] = [
    {
        id: "1",
        name: "Imagen Destacada 1",
        image: imgDestacada1,
    },
    {
        id: "2",
        name: "Imagen Destacada 2",
        image: imgDestacada2,
    },
    {
        id: "3",
        name: "Imagen Destacada 3",
        image: imgDestacada3,
    }, 
];