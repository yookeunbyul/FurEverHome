import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';

// import required modules
import { Navigation } from 'swiper/modules';
import Card from '../common/Card';

function Slider() {
    return (
        <StyledSwiper
            spaceBetween={50}
            loop={true}
            navigation={false}
            modules={[Navigation]}
            breakpoints={{
                100: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 4,
                },
                1400: {
                    slidesPerView: 5,
                },
            }}
            className="mySwiper"
        >
            <StyledSlide>
                <Card />
            </StyledSlide>
            <StyledSlide>
                <Card />
            </StyledSlide>
            <StyledSlide>
                <Card />
            </StyledSlide>
            <StyledSlide>
                <Card />
            </StyledSlide>
            <StyledSlide>
                <Card />
            </StyledSlide>
            <StyledSlide>
                <Card />
            </StyledSlide>
        </StyledSwiper>
    );
}

const StyledSwiper = styled(Swiper)``;

const StyledSlide = styled(SwiperSlide)``;

export default Slider;
