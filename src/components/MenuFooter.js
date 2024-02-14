import * as React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    useMediaQuery,
    Box,
    Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TitleStyled = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: 700,
    color: '#353535'
}));


const TextStyled = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    marginBottom: '8px',
    fontWeight: 400,
    color: '#000',
    cursor: 'pointer'
}));

const MenuFooter = (() => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    return (
        <Box>
            {!isMobile &&
                <Stack flexDirection='row' justifyContent='space-between' >
                    <Box>
                        <TitleStyled>Informações</TitleStyled>
                        <Stack gap='24px' marginTop='24px'>
                            <TextStyled>
                                Quem Somos
                            </TextStyled>
                            <TextStyled>
                                Prazo de Envio
                            </TextStyled>
                            <TextStyled>
                                Trocas e Devoluções
                            </TextStyled>
                            <TextStyled>
                                Promoções e Cupons
                            </TextStyled>
                        </Stack>
                    </Box>
                    <Box>
                        <TitleStyled>Minha Conta</TitleStyled>
                        <Stack gap='24px' marginTop='24px'>
                            <TextStyled>
                                Minha Conta
                            </TextStyled>
                            <TextStyled>
                                Meus Pedidos
                            </TextStyled>
                            <TextStyled>
                                Cadastre-se
                            </TextStyled>
                        </Stack>
                    </Box>
                    <Box>
                        <TitleStyled>Onde nos Encontrar</TitleStyled>
                        <Stack gap='24px' marginTop='24px'>
                            <TextStyled>
                                Lojas
                            </TextStyled>
                            <TextStyled>
                                Endereço
                            </TextStyled>
                        </Stack>
                    </Box>
                </Stack>
            }
            {isMobile &&
                <>
                    <Accordion sx={{ border: '0px', boxShadow: 'none' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon htmlColor='#353535' />}
                        >
                            <TitleStyled>Informações</TitleStyled>
                        </AccordionSummary>
                        <AccordionDetails >
                            <TextStyled>
                                Quem Somos
                            </TextStyled>
                            <TextStyled>
                                Prazo de Envio
                            </TextStyled>
                            <TextStyled>
                                Trocas e Devoluções
                            </TextStyled>
                            <TextStyled>
                                Promoções e Cupons
                            </TextStyled>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ border: '0px', boxShadow: 'none' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon htmlColor='#353535' />}
                        >
                            <TitleStyled>Minha Conta</TitleStyled>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextStyled>
                                Minha Conta
                            </TextStyled>
                            <TextStyled>
                                Meus Pedidos
                            </TextStyled>
                            <TextStyled>
                                Cadastre-se
                            </TextStyled>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ border: '0px', boxShadow: 'none' }} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon htmlColor='#353535' />}
                        >
                            <TitleStyled>Onde nos Encontrar</TitleStyled>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextStyled>
                                Lojas
                            </TextStyled>
                            <TextStyled>
                                Endereço
                            </TextStyled>
                        </AccordionDetails>
                    </Accordion>
                </>
            }
        </Box>
    );
})

export default MenuFooter;