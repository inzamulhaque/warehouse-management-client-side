import React from 'react';

const Banner = () => {
    return (
        <div className='banner h-[500px] flex justify-center items-center lg:hidden'>
            <div>
                <h3 className="text-center text-[25px] text-white font-bold">Haque Grocery's</h3>
                <p className="mt-1 text-center text-[20px] text-white font-medium">Best Products</p>
                <p className="mt-1 text-center text-[20px] text-white font-medium">Good Food</p>
                <p className="mt-1 text-center text-[20px] text-white font-medium">Always Sales Best Products</p>
            </div>
        </div>
    );
};

export default Banner;