import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from '../Slider'
import CardShowcase from "./CardShowcase";
import mockCardShowcase from '../../utils/mockCardShowcase'
import { Stack, useMediaQuery } from "@mui/material";

const Showcase = (() => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.down("xl"));
    const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const settings = {
        slidesPerView: isDesktop ? (isTablet ? (isMobile ? 1 : 2) : 3) : 5,
    }

    return (
        <Slider
            settings={settings}
            center
        >
            <Stack flexDirection='row' gap='16px'>
                {mockCardShowcase.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardShowcase image={item.image} price={item.price} title={item.title} text={item.text} colors={item.colors} />
                    </SwiperSlide>
                ))}
            </Stack>
        </Slider>
    );
})

export default Showcase;