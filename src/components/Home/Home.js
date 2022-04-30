import React from 'react';
import Banner from './Banner';
import MyCarousel from './MyCarousel';

const Home = () => {
    return (
        <>
            {/* add Carousel */}
            <MyCarousel />
            {/* add banner for tab and phone */}
            <Banner />
        </>
    );
};

export default Home;