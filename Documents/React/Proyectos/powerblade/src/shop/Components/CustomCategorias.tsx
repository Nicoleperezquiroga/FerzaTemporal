import React from 'react'
import { categorias } from '@/mocks/categorias.mock'
import type { Categoria } from '@/mocks/categorias.mock'
import { Link } from "react-router";
export const CustomCategorias = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {categorias.map((item: Categoria) => (
                    <div key={item.id} className="flex justify-center">
                        <Link to={`/gender/${item.name}`}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[140px] h-auto"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
