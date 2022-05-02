import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import useSixProducts from '../../hooks/useSixProducts';
import "swiper/css";
import "swiper/css/pagination";
import Card from '../Card/Card';
SwiperCore.use([Autoplay]);

const Testimonilas = () => {
    const [sixProducts] = useSixProducts();
    return (
        <>
            <Swiper
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {
                    sixProducts.map(item => <SwiperSlide key={item._id}>
                        <Card item={item} />
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default Testimonilas;