import React from 'react'
import { CustomJumbotron } from '@/shop/Components/CustomJumbotron'
import { CustomSlide } from '@/shop/Components/CustomSlide'
import { CustomCategorias } from '@/shop/Components/CustomCategorias'
import { CustomTopVentas } from '@/shop/Components/CustomTopVentas'
import { Separator } from '@/components/ui/separator'
import { CustomImagenDestacadas } from '@/shop/Components/CustomImagenDestacadas'

export const HomePage = () => {
  return (
    <>
    <CustomSlide/>
    <CustomJumbotron title={'Categoría de Productos'} subTitle={'Busca lo que necesitas aquí.'}/>
    <CustomCategorias/>
    <br />
    <CustomJumbotron title={'Top Ventas'} subTitle={'Lo que más se llevan.'}/>
    <CustomTopVentas/>
    <br />
    <CustomImagenDestacadas/>
    </>

  )
}
