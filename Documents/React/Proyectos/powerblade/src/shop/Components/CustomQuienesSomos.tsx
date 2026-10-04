import React from 'react'
import QuienesSomos1 from "@/assets/Shop/QuienesSomos/QuienesSomos1.png";
import QuienesSomos2 from "@/assets/Shop/QuienesSomos/QuienesSomos2.png";
import { CustomReporte } from './CustomReporte';
import { CustomCollapsible } from './CustomCollapsible';
import {infoPowerBlade} from '../../mocks/infoPowerBlade.mock'
import type { InfoPowerBlade } from '@/mocks/infoPowerBlade.mock'

export const CustomQuienesSomos = () => {
    return (
        <div className=''>
            <div className='flex justify-center lg:px-30 px-10'>
                <img
                    src={QuienesSomos1}
                    alt="ImagenRemos"
                    className="rounded-xl w-[100%] h-auto"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-30 px-10 pt-5 pb-10">
                <h1 className='font-bold text-2xl lg:text-[2rem]'>Pasión por el deporte, atención al detalle y libertad para disfrutar cada aventura</h1><p className='text-md text-muted-foreground mb-8 max-w-2xl mx-auto lg:text-[1rem] capitalize'>En Powerblade creemos que cada experiencia comienza con el equipamiento adecuado. Seleccionamos productos pensados para acompañarte en el agua, sobre la tabla y en cada desafío, combinando funcionalidad, diseño y calidad.</p>
            </div>
            <hr />
            <CustomReporte />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 lg:px-30 px-10 bg-[#0000000f]">
                <img
                    src={QuienesSomos2}
                    alt="ImagenRemos"
                    className="rounded-xl w-[100%] h-auto"
                />
                <div className='flex flex-col'>
                    <h1 className='font-bold text-[2rem]'>Offering rare and beautiful items worldwide</h1>
                    <h3 className='font-bold'>Introducción</h3>
                    <p className='pb-5 text-muted-foreground capitalize'>Welcome to Amerce Store, your premier destination for fashion-forward clothing accessories. We pride ourselves on offering a curated selection of rare beautiful items sourced both locally and globally. Our mission is to bring you the latest trends & timeless styles, ensuring every piece reflects quality and elegance.</p>
                    {infoPowerBlade.map((info: InfoPowerBlade)=>(
                        <CustomCollapsible key={info.id} info={info}/>

                    ))}
                    
                </div>

            </div>
        </div>
    )
}
