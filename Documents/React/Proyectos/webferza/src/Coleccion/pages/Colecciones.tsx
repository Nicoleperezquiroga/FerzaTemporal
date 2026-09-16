import React from 'react';

import { Link } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Imgcolecciones from '../assets/images/colecciones.png';

import { Coleccion } from './Coleccion';
import { colecciones } from '../data/Colecciones';
import { CardMedia } from '@mui/material';
import { BarraNavegacion } from '../../Navegacion/pages/BarraNavegacion';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function TabPanel(props: TabPanelProps) {

    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`keep-mounted-tabpanel-${index}`}
            aria-labelledby={`keep-mounted-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


function a11yProps(index: number) {

    return {
        id: `keep-mounted-tab-${index}`,
        'aria-controls': `keep-mounted-tabpanel-${index}`,
    };

}


export default function Colecciones() {

    const [value, setValue] = React.useState(0);

    const handleChange = (
        event: React.SyntheticEvent,
        newValue: number
    ) => {
        setValue(newValue);
    };


    return (
        <>
      <BarraNavegacion/>

        <CardMedia
          className='imgInicio'
          component="img"
          image={Imgcolecciones}
        />

            <Box sx={{ width: '100%' }}>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="colecciones"
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider'
                    }}
                >

                    {colecciones.map((coleccion, index) => (

                        <Tab
                            key={coleccion.id}
                            label={coleccion.menu}
                            {...a11yProps(index)}
                        />

                    ))}

                </Tabs>


                {colecciones.map((coleccion, index) => (

                    <TabPanel
                        key={coleccion.id}
                        value={value}
                        index={index}
                    >

                        <Coleccion
                            nombre={coleccion.nombre}
                            icono={coleccion.icono}
                            productos={coleccion.productos}
                        />

                    </TabPanel>
                ))}
            </Box>
        </>
    );
}