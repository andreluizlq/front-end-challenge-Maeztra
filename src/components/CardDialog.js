import React, { useState } from "react";
import {
    Dialog,
    Button,
    Typography,
    Stack,
    InputBase,
    useMediaQuery
} from "@mui/material";
import ImageTemplate from "./ImageTemplate";
import dialogImage from "../assets/image/dialogImage/dialogImage.png";
import NewsletterIcon from "../assets/icons/NewsletterIcon";
import { styled } from '@mui/material/styles';
import SendIcon from "../assets/icons/SendIcon";



const Search = styled('div')(({ theme }) => ({
    borderRadius: '10px',
    width: '100%',
    border: '1px solid #C4C4C4'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '95%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: '20px',
    },
}));

const CardDialog = (() => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth='md'
        >
            <Stack flexDirection='row'>
                <ImageTemplate image={dialogImage} style={{ display: isMobile ? 'none' : 'block' }} />
                <Stack alignItems='center' justifyContent='center' width='100%' m='52px '>
                    <Stack alignItems='center' justifyContent='center'>
                        <NewsletterIcon />
                        <Typography marginY='12px' fontSize='12px' color='#464B54' textTransform='uppercase'>Bem Vindo à MAEZTRA</Typography>
                        <Typography fontSize={{ md: '20px', sm: '16px' }} fontWeight={400} color='#787D83'>Receba em Primeira mão</Typography>
                        <Typography fontSize={{ md: '20px', sm: '16px' }} fontWeight={700} color='#787D83' marginTop='-6px' textAlign='center'>desconto e ofertas exclusivas</Typography>
                    </Stack>
                    <Stack marginTop='25px' gap='10px' width='100%'>
                        <Search>
                            <StyledInputBase
                                placeholder="Digite seu e-mail"
                            />
                        </Search>
                        <Button variant="contained" color="secondary" onClick={handleClose} endIcon={<SendIcon />} sx={{ color: '#fff', fontSize: '12px', height: "40px" }}>Enviar</Button>
                    </Stack>

                </Stack>
            </Stack>

        </Dialog>
    );
})

export default CardDialog;