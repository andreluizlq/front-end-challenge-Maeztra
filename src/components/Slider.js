import React from "react";

import { Swiper } from "swiper/react";
import { styled } from '@mui/material/styles';
import { Pagination } from 'swiper/modules'

const StyledBox = styled('div')(({ theme, center }) => ({
    '& .swiper-slide': {
        display: center ? 'flex' : 'block',
        justifyContent: 'center'
    },
    '& .swiper-pagination-bullets': {
        marginBottom: '18px !important',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '10px !important',
        },
    },
    '& .swiper-pagination-bullet-active': {
        backgroundColor: '#FAA500 !important',
    },
    '& .swiper-pagination-bullet': {
        backgroundColor: 'transparent',
        border: '2px solid #FAA500',
        borderRadius: '50%',
        opacity: '1',
        padding: '6px',
        margin: '0 8px 0 8px !important',
        [theme.breakpoints.down("sm")]: {
            padding: '2px',
            border: '1px solid #FAA500',
        },
    },
    '& .swiper-button-prev': {
        color: '#353535',
        paddingLeft: '40px',
        '&::after': {
            fontSize: '32px',
            fontWeight: 'bold'
        }
    },
    '& .swiper-button-next': {
        color: '#353535',
        paddingRight: '40px',
        '&::after': {
            fontSize: '32px',
            fontWeight: 'bold'
        }
    },
}));

const Slider = (({ settings, children, center }) => {
    return (
        <StyledBox center={center}>
            <Swiper
                modules={[Pagination]}
                navigation
                {...settings} >
                {children}
            </Swiper>
        </StyledBox>
    );
})

export default Slider;