import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import ImageTemplate from "../ImageTemplate";

const CardShowcase = (({ image, price, title, text, colors }) => {

    return (
        <>
            <Box maxWidth='308px'>
                <ImageTemplate image={image} />
                <Box paddingX='27px'>
                    <Box maxWidth='254px'>
                        <Stack flexDirection='row' gap='8px' marginTop='8px'>
                            {colors.map((color, index) => (
                                <Box key={index} sx={{ height: '27px', width: '27px', borderRadius: '4px', background: color }} />
                            ))}
                        </Stack>

                        <Stack marginTop='8px' marginBottom='8px'>
                            <Typography fontSize='20px' fontWeight={700} color='primary'>R$ {price}</Typography>
                            <Typography fontSize='16px' fontWeight={400} color='#000'>{title}</Typography>
                            <Typography
                                fontSize='13px'
                                fontWeight={400}
                                color='primary'
                                marginTop='8px'
                                sx={{
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    WebkitLineClamp: 3,
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {text}
                            </Typography>
                        </Stack>
                    </Box>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{
                            height: '35px',
                            borderRadius: '4px',
                            color: '#fff',
                            textTransform: 'capitalize',
                            fontSize: '16px',
                            fontWeight: 400
                        }}
                    >
                        Adicionar
                    </Button>
                </Box>
            </Box >
        </>
    );
})

export default CardShowcase;