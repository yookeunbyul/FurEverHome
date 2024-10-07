// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Card from '../common/Card';
import { ApiResponse } from '../../hooks/useAnimals';
import Loading from './Loading';

interface SliderProps {
    oneDayAnimals?: ApiResponse; // oneDayList를 객체로 정의
}

function Slider({ oneDayAnimals }: SliderProps) {
    const oneDayList = oneDayAnimals?.AbdmAnimalProtect?.[1]?.row;

    if (!oneDayList) {
        return <Loading />;
    }

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
            {oneDayList &&
                oneDayList.map((item) => (
                    <SwiperSlide key={item.ABDM_IDNTFY_NO}>
                        <Card animal={item} />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
}

export default Slider;
