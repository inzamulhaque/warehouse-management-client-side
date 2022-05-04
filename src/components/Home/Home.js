import React from 'react';
import Banner from './Banner';
import MyCarousel from './MyCarousel';
import Testimonilas from './Testimonilas';
import MyChart from './MyChart';

const Home = () => {
    return (
        <>
            {/* add Carousel */}
            <MyCarousel />
            {/* add banner for tab and phone */}
            <Banner />
            {/* add service section */}
            <div className='container mx-auto my-3'>
                <h3 className='dark:text-white text-[25px] font-bold text-center text-blue-500 mb-2'>Items</h3>
                <Testimonilas />
            </div>
            {/* add chart */}
            <div className='container mx-auto my-3'>
                <h3 className='dark:text-white text-[25px] font-bold text-center text-blue-500 mb-2'>Charts</h3>
                <MyChart />
            </div>
        </>
    );
};

export default Home;