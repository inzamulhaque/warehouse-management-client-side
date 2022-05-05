import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import useSixProducts from '../../hooks/useSixProducts';
import "swiper/css";
import "swiper/css/pagination";
import Card from '../Card/Card';
import UpdateQty from '../Card/UpdateQty';
import { useNavigate } from 'react-router-dom';
SwiperCore.use([Autoplay]);

const Testimonilas = () => {
    const navigate = useNavigate();
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
                        <Card item={item} >
                            <>
                                <UpdateQty id={item._id} />
                                <button onClick={() => navigate(`/inventory/${item._id}`)} className="my-2 py-2 px-3 w-full bg-blue-500 text-[22px] text-white font-semibold border-2 border-blue-500 duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-lg">Update</button>
                            </>
                        </Card>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default Testimonilas;