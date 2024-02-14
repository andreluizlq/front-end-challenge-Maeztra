import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from '../Slider'
import CardBanner from "./CardBanner";

const Banner = (() => {
    const settings = {
        slidesPerView: 1,
        pagination: {
            clickable: true
        }
    }
    return (
        <Slider
            settings={settings}
        >
            <SwiperSlide>
                <CardBanner />
            </SwiperSlide>
            <SwiperSlide>
                <CardBanner />
            </SwiperSlide>
            <SwiperSlide>
                <CardBanner />
            </SwiperSlide>
            <SwiperSlide>
                <CardBanner />
            </SwiperSlide>
            <SwiperSlide>
                <CardBanner />
            </SwiperSlide>
        </Slider>
    );
})

export default Banner;