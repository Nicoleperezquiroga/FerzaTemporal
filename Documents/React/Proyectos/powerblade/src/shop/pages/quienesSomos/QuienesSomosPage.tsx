import { CustomJumbotron } from '@/shop/Components/CustomJumbotron'
import { CustomQuienesSomos } from '@/shop/Components/CustomQuienesSomos';
import { CustomReporte } from '@/shop/Components/CustomReporte';
import React from 'react'

export const QuienesSomosPage = () => {
    const textoSubtitulo: string = 'Somos una empresa chilena que busca acercar equipamiento deportivo de calidad a quienes disfrutan de nuevas experiencias y desafíos.';
    return (
        <>
            <CustomJumbotron title='Sobre Nosotros' subTitle={textoSubtitulo} />
            <CustomQuienesSomos />
            
        </>
    )
}
