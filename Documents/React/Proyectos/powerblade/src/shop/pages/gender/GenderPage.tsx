import { CustomPagination } from '@/components/custom/CustomPagination'
import { products } from '@/mocks/products.mock'
import { CustomCategorias } from '@/shop/Components/CustomCategorias'
import { CustomJumbotron } from '@/shop/Components/CustomJumbotron'
import { ProductsGrid } from '@/shop/Components/ProductsGrid'
import type { Product } from '@/mocks/products.mock';

import React from 'react'
import { useParams } from 'react-router'

export const GenderPage = () => {
  
  const {gender} = useParams();
      const productos = products.filter(
          (product: Product) => product.category === gender
      )
  return (
    <>
    <CustomJumbotron title={`${gender}`} subTitle='Aquí encuentra lo que buscas'/>
    <CustomCategorias/>
    <ProductsGrid products={productos}/>
    <CustomPagination totalPages={7} />
    </>
      )
}
