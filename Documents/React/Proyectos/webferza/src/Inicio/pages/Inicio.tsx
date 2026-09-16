import React from 'react'
import { Link } from "react-router-dom";
import imgColecciones from '../assets/images/img-colecciones.png';
import imgComprar from '../assets/images/img-comprar.png';
import logoFerza from '../assets/images/logo.png';
import '../css/inicio.css';

import { CardMedia } from '@mui/material';
import { BarraNavegacion } from '../../Navegacion/pages/BarraNavegacion';



export const Inicio = () => {
  return (
    <>
      <BarraNavegacion/>
      <div className='inicio-contenedor'>
        <CardMedia
          className='imgInicio'
          component="img"
          image={logoFerza}
        />

      </div>
      <div className='inicio-opciones'>
       <div className='img-opciones primera-imagen'><Link to="/Colecciones"><CardMedia
          className=''
          component="img"
          image={imgColecciones}
        /> </Link></div>
        <div className='img-opciones'><Link to="/ComoComprar"><CardMedia
          className=''
          component="img"
          image={imgComprar}
        /></Link></div>
      </div>
    </>
  )
}
