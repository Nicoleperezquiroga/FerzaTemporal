// Import all product images
import TopProducto1 from "@/assets/Shop/Productos/TopProducto1.png";
import TopProducto2 from "@/assets/Shop/Productos/TopProducto2.png";
import TopProducto3 from "@/assets/Shop/Productos/TopProducto3.png";
import TopProducto4 from "@/assets/Shop/Productos/TopProducto4.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  topVenta?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Remo Medium Flex Full Carbono",
    price: 300.000,
    image: TopProducto1,
    category: "Remos",
    description: "Remo especial para agregar potencia a tus carreras técnicas.",
    sizes: ["S", "M", "L"],
    colors: ["Negro", "Blanco", "Gris"],
    topVenta: true,
  },
  {
    id: "2",
    name: "Remo Low Flex Full Carbono",
    price: 300.000,
    image: TopProducto2,
    category: "remos",
    description: "Remo poco flexible, para agregar potencia a tus carreras sprint.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Negro", "Gris"],
    topVenta: true,
  },
  {
    id: "3",
    name: "Tabla Inflable",
    price: 300000,
    image: TopProducto3,
    category: "remos",
    description: "Tabla ideal para acompañarte a tus carreras.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Negro", "Gris"],
    topVenta: true,
  },
  {
    id: "4",
    name: "Tabla Inflable",
    price: 300000,
    image: TopProducto4,
    category: "tablas",
    description: "Tabla ideal para acompañarte a tus carreras.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Negro", "Gris"],
    topVenta: true,
  },
];