import { createBrowserRouter } from 'react-router'
import { Inicio } from '../Inicio/pages/Inicio';
import ColeccionesTabs from '../Coleccion/pages/Colecciones';
import { ComoComprar } from '../ComoComprar/pages/ComoComprar';

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Inicio/>
    },
    {
    path: '/Colecciones',
    element: <ColeccionesTabs />
    },
    {
    path: '/ComoComprar',
    element: <ComoComprar />
    }
]);
