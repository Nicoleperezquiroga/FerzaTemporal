import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../css/coleccion.css';
import { Grid, Popover } from '@mui/material';
import { Producto } from './Producto';


interface Producto {
    nombre: string;
    precio: string;
    imagen: string;
}

interface ColeccionProps {
    nombre: string;
    icono?: string | null;
    productos: Producto[];
}

export const Coleccion = ({
    nombre,
    icono,
    productos
}: ColeccionProps) => {

      const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <div className='fondoColeccionOcean padding-coleccion'>
            {/* ENCABEZADO */}
            <div className='encabezado-floripia'>
                <h1 className='tamaño-titulo1'>
                    COLECCIÓN
                </h1>
                <h2 className='tamaño-titulo2'>
                    {nombre}
                </h2>
            </div>
            {/* PRODUCTOS */}
            <Grid
                container
                spacing={4}
                sx={{
                    padding: '0 5%'
                }}
            >

                {productos.map((producto) => (

                    <Grid
                        key={producto.nombre}
                        size={{
                            xs: 12,
                            sm: 6,
                            md: 4
                        }} 
                    >

                        <Card className="tamaño-card" >

                            <CardActionArea onClick={handleClick}>

                                <CardMedia
                                    className="tamaño-imagen"
                                    component="img"
                                    image={producto.imagen}
                                    alt={producto.nombre}
                                />

                                <CardContent className="fondo">

                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        className="nombreProducto"
                                    >
                                        {producto.nombre}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        className="valorProducto"
                                    >
                                        {producto.precio}
                                    </Typography>

                                </CardContent>

                            </CardActionArea>

                        </Card>
      <Popover
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}

    anchorOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
      >
        <Producto></Producto>
      </Popover>
                    </Grid>

                ))}

            </Grid>
            
        </div>
    );
};