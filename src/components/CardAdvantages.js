import React from "react";
import {
    Typography,
    Stack,
    Box
} from "@mui/material";
import ImageTemplate from './ImageTemplate'

const CardAdvantages = (({ title, subTitle, image }) => {
    return (
        <Stack alignItems="center" flexDirection='row' gap='22px' padding='12px 28px 12px 28px' width='307px' sx={{ background: "#EFEFEF", pointerEvents: 'none' }}>
            <ImageTemplate image={image} />
            <Box>
                <Typography fontWeight={700} fontSize='14px' color='primary' noWrap >
                    {title}
                </Typography>
                <Typography color='#000' fontSize='12px' fontWeight={400} noWrap>
                    {subTitle}
                </Typography>
            </Box>
        </Stack >
    );
})

export default CardAdvantages;