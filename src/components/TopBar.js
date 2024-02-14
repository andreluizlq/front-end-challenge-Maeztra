import React, { useEffect, useState } from "react";
import {
    Typography,
    Stack,
} from "@mui/material";

const TopBar = (() => {
    const [scrollDetectado, setScrollDetectado] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const noTopoDaPagina = window.scrollY === 0;
            setScrollDetectado(!noTopoDaPagina);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Stack alignItems="center" sx={{ background: "#353535", display: scrollDetectado ? 'none' : 'flex' }} >
            <Typography color='white' p='2px' fontSize='12px' fontWeight='400'>
                Acompanhe as melhores promoções disponíveis aqui na Maeztra.
            </Typography>
        </Stack >
    );
})

export default TopBar;