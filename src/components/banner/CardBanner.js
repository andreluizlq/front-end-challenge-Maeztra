import React from "react";
import BannerImage from '../../assets/image/bannerImage'
import { Box, Button, Typography, Container, useMediaQuery } from "@mui/material";

const CardBanner = (() => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <>
            <Box sx={{ position: "relative" }}>
                {!isMobile &&
                    <BannerImage width={'100%'} height={'600px'} />

                }
                {isMobile &&
                    <BannerImage width={'100%'} height={'320px'} mobile />

                }
                <Box top={{ sm: '25%', xs: '14%' }} position='absolute' zIndex='1' width='100%'>
                    <Container maxWidth={false} sx={{ maxWidth: '1276px' }}  >
                        <Box marginLeft={{ sm: 'initial', xs: '54px' }}>
                            <Typography
                                fontSize={{ sm: '40px', xs: '30px' }}
                                fontWeight='bold' color='#fff'
                                fontFamily='Montserrat'
                                maxWidth={{ sm: 'initial', xs: '200px' }}
                                lineHeight='37px'
                            >
                                Promoções de Outono
                            </Typography>
                            <Typography
                                fontSize={{ sm: '20px', xs: '14px' }}
                                fontWeight={400}
                                color='#fff'
                                fontFamily='Montserrat'
                                mt={{ sm: '40px', xs: '24px' }}
                                mb={{ sm: '32px', xs: '16px' }}
                                maxWidth={{ sm: '420px', xs: '230px' }}
                                lineHeight={{ sm: '24px', xs: '17px' }}
                            >
                                Confiras os melhores looks para combinar com você nesse Outono
                            </Typography>

                            {!isMobile &&
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    sx={{
                                        height: '44px',
                                        width: '130px',
                                        borderRadius: '8px',
                                        color: "#fff",
                                        textTransform: 'capitalize',
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Conferir
                                </Button>
                            }
                            {isMobile &&
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    sx={{
                                        height: '30px',
                                        width: '80px',
                                        borderRadius: '8px',
                                        color: "#fff",
                                        textTransform: 'capitalize',
                                        fontSize: '14px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Conferir
                                </Button>
                            }
                        </Box>
                    </Container>
                </Box>
            </Box >
        </>
    );
})

export default CardBanner;