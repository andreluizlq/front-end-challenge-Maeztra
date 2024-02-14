import React from "react";
import {
    Typography,
    Stack,
    InputBase,
    Button
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    width: '100%',
    border: '1px solid #353535',
    transition: '0.2s',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '95%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: '20px',
    },
}));

const Newsletter = (() => {
    return (
        <Stack flexDirection={{ sm: 'row', xs: 'column' }} justifyContent='space-between' gap='20px' alignItems='center'>
            <Typography color='#000' fontSize='24px' fontWeight={700}>
                Recebe Nossa Newsletter
            </Typography>
            <Stack flexDirection='row' width='100%' maxWidth='630px' height='40px'>
                <Search>
                    <StyledInputBase
                        placeholder="Digite seu e-mail"
                    />
                </Search>
                <Button variant="contained" color="secondary"
                    sx={{
                        marginLeft: '-10px',
                        width: '131px',
                        color: "#fff",
                        textTransform: 'capitalize',
                        fontWeight: 700
                    }}
                >
                    Enviar
                </Button>
            </Stack>
        </Stack >
    );
})

export default Newsletter;