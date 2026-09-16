import OceanReef from '../assets/images/Oceano/Ocean-Reef.png';
import WetBagDuo from '../assets/images/Oceano/Wet-Bag-Duo.png';
import PaddleSUP from '../assets/images/Oceano/Paddle-SUP.png';
import SurfMat from '../assets/images/Oceano/Surf-Mat.png';
import Maui from '../assets/images/Oceano/Maui.png';
import concha from '../assets/images/Oceano/concha.png';

import Clutch from '../assets/images/Floripia/Clutch.png';
import ClutchVuelos from '../assets/images/Floripia/Clutch-vuelos.png';
import Neceser from '../assets/images/Floripia/Neceser.png';

export const colecciones = [
  {
    id: 'mar',
    nombre: 'Mar',
    menu: 'Mar',
    icono: concha,

    productos: [
      {
        nombre: 'Ocean Reef',
        precio: '$14.900',
        imagen: OceanReef
      },
      {
        nombre: 'Wet Bag Duo',
        precio: '$18.900',
        imagen: WetBagDuo
      },
      {
        nombre: 'Paddle SUP',
        precio: '$17.900',
        imagen: PaddleSUP
      },
      {
        nombre: 'Mat Surf Pag',
        precio: '$36.900',
        imagen: SurfMat
      },
      {
        nombre: 'Maui',
        precio: '$22.900',
        imagen: Maui
      },
            {
        nombre: 'Poncho Pisi',
        precio: '$39.900',
        imagen: Maui
      },
            {
        nombre: 'Pāreu',
        precio: '$.....',
        imagen: Maui
      },
            {
        nombre: 'Totebag Pisi',
        precio: '$.....',
        imagen: Maui
      },
            {
        nombre: 'Totebag Rafaela',
        precio: '$16.900',
        imagen: Maui
      },
            {
        nombre: 'Totebag Constanza XL',
        precio: '$22.900',
        imagen: Maui
      }
    ]
  },

  {
    id: 'floripia',
    nombre: 'Floripia',
    menu: 'Floripia',
    icono: null,

    productos: [
      {
        nombre: 'Clutch',
        precio: '$12.900',
        imagen: Clutch
      },
      {
        nombre: 'Clutch con vuelos',
        precio: '$14.900',
        imagen: ClutchVuelos
      },
      {
        nombre: 'Neceser',
        precio: '$14.900',
        imagen: Neceser
      }
    ]
  },

  {
    id: 'crochet',
    nombre: 'Crochet',
    menu: 'Crochet',
    icono: null,
    productos: []
  },

  {
    id: 'cuadrille',
    nombre: 'Cuadrille',
    menu: 'Cuadrille',
    icono: null,
    productos: []
  }
];