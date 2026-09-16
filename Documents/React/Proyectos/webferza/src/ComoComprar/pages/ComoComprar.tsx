import React from 'react'
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../css/ComoComprar.css';
import ImgComoComprar from '../assets/comoComprar.png';
import { CardMedia } from '@mui/material';
import { BarraNavegacion } from '../../Navegacion/pages/BarraNavegacion';


export const ComoComprar = () => {

    return (<>
          <BarraNavegacion/>
    
        <CardMedia
            className='imgInicio'
            component="img"
            image={ImgComoComprar}
        />
        <div className='contenido'>

            <div className="Subtitulo">
                <h5>ES MUY FÁCIL, SOLO SIGUE ESTOS PASOS</h5>
            </div>
            <br />
            <div className="Indicaciones">
                <div className="ComponenteIndicacion">
                    <LoyaltyIcon className="IconoPunto"></LoyaltyIcon>
                    <div className="Texto">
                        <h3 className="TituloTexto">ELIGE TU PRODUCTO</h3>
                        <p className="Detalle">Explora nuestras colecciones y encuentra la pieza que más te guste</p>
                    </div>
                </div>
                <div className="ComponenteIndicacion">
                    <InstagramIcon className="IconoPunto"></InstagramIcon>
                    <div className="Texto">
                        <h3 className="TituloTexto">COMUNICATE CON NOSOTROS</h3>
                        <p className="Detalle">Envianos un mensaje por instagram indicándonos el producto que deseas.</p>
                    </div>
                </div>
                <div className="ComponenteIndicacion">
                    <CheckCircleIcon className="IconoPunto"></CheckCircleIcon>
                    <div className="Texto">
                        <h3 className="TituloTexto">VERIFICAMOS DISPONIBILIDAD</h3>
                        <p className="Detalle">Verificamos disponibilidad del producto y te entregaremos información de tu compra.</p>
                    </div>
                </div>
                <div className="ComponenteIndicacion">
                    <ShoppingCartIcon className="IconoPunto"></ShoppingCartIcon>
                    <div className="Texto">
                        <h3 className="TituloTexto">CONFIRMAMOS TU COMPRA</h3>
                        <p className="Detalle">Una vez confirmado tu pago. Coordinamos la entraga de tu pedido.</p>
                    </div>
                </div>
            </div>
        </div>


    </>);
}