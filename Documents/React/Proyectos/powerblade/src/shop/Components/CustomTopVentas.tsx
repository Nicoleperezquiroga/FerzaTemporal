import React from 'react'
import { ProductCard } from './ProductCard'
import { products } from '@/mocks/products.mock';
import type { Product } from '@/mocks/products.mock';


export const CustomTopVentas = () => {

    const topVentas = products.filter(
        (product: Product) => product.topVenta === true
    )

    return (
        <div className="flex justify-center lg:px-30 px-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {topVentas.map((producto) => (
                    <ProductCard id={producto.id} name={producto.name} price={producto.price} image={producto.image} category={producto.category} />
                ))}
            </div>
        </div>
    )
}
