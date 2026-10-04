import React from 'react'
import type { Estadisticas } from '@/mocks/estadisticas.mock';
import { estadisticas } from '@/mocks/estadisticas.mock';

export const CustomReporte = () => {

    return (
        <div className="flex justify-center lg:px-30 px-10 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {estadisticas.map((estadistica) => (
                  <div className='flex flex-col justify-center items-center' key={estadistica.id}>
                    <h1 className='font-bold text-[2rem]'>{estadistica.valor}</h1>
                    <h3 className='font-bold'>{estadistica.titulo}</h3>
                    <p className='text-center text-muted-foreground'>{estadistica.subtitulo}</p>
                  </div>
                ))}
            </div>
        </div>
  )
}
