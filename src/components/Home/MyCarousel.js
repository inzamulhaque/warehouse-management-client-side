import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/fikri-rasyid-ezeC8-clZSs-unsplash.jpg'
import img2 from '../../images/franki-chamaki-ivfp_yxZuYQ-unsplash.jpg'
import img3 from '../../images/kenny-eliason-SvhXD3kPSTY-unsplash.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={3000} className='h-[700px] overflow-hidden hidden lg:block'>
            <div>
                <img src={img1} className="lg:h-[600px]" alt="slider image" />
                <p className="legend">Best Products</p>
            </div>
            <div>
                <img src={img2} className="lg:h-[600px]" alt="slider image" />
                <p className="legend">Good Food</p>
            </div>
            <div>
                <img src={img3} className="lg:h-[600px]" alt="slider image" />
                <p className="legend">Always Sales Best Products</p>
            </div>
        </Carousel>
    );
};

export default MyCarousel;