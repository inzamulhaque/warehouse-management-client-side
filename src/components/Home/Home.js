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
            {/* add service section */}
            <div>
                <h1>our services</h1>
            </div>
        </>
    );
};

export default Home;