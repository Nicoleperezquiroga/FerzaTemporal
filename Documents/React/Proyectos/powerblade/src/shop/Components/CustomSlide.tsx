import React from 'react'
import '../css/slide.css';
import { Button } from '@/components/ui/button';

export const CustomSlide = () => {
  return (
    <div className="Slide-Principal">
        <p className='Mensaje1'>DESCUBRE EL PODER DE CADA PALADA</p>
        <h1 className='Mensaje2'>Potencia, precisión y control en cada movimiento</h1>
        <div className='Botones'>
        <Button className="rounded-full p-4 m-1" size="lg" variant="outline">Ver Productos</Button>
        <Button className="rounded-full p-4 m-1" size="lg" variant="outline">Contáctanos</Button>
        </div>
    </div>
  )
}
