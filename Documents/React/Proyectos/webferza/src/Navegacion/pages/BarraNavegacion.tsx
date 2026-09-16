import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useNavigate } from 'react-router-dom';

const options = [
    {
        nombre: 'INICIO',
        path: '/'
    },
    {
        nombre: 'COLECCIONES',
        path: '/Colecciones'
    },
    {
        nombre: 'NUESTRA HISTORIA',
        path: '/NuestraHistoria'
    },
    {
        nombre: 'CÓMO COMPRAR',
        path: '/ComoComprar'
    }
];

const ITEM_HEIGHT = 48;

export const BarraNavegacion = () => {

    const [anchorEl, setAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    // Navegación
    const navigate = useNavigate();

    // Abrir menú
    const handleClick = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        setAnchorEl(event.currentTarget);
    };

    // Cerrar menú
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Navegar
    const handleNavigate = (path: string) => {
        handleClose();
        navigate(path);
    };

    return (
        <div>

            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '40ch',
                        },
                    },
                    list: {
                        'aria-labelledby': 'long-button',
                    },
                }}
            >

                {options.map((option) => (

                    <MenuItem
                        key={option.nombre}
                        onClick={() => handleNavigate(option.path)}
                    >
                        {option.nombre}
                    </MenuItem>

                ))}

            </Menu>

        </div>
    );
};