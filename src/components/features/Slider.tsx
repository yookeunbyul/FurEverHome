// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Card from '../common/Card';

function Slider() {
    return (
        <Swiper
            spaceBetween={40}
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
                1200: {
                    slidesPerView: 5,
                },
                1400: {
                    slidesPerView: 6,
                },
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;
