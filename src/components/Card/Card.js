import React from 'react';

const Card = ({ item }) => {
    const { email, name, sname, category, price, quantity, image, description } = item || {};
    return (
        <>
            <div className="my-2 py-2 px-3 card dark:bg-white h-100 mx-auto">
                <div className="w-[60px] h-[50px] mx-auto">
                    <img src={image} alt="Item Image" className="w-full" />
                </div>
                <div className="my-3">
                    <h3 className="text-[25px] font-bold">{name}</h3>
                    <p className="tex-[16px] font-normal">Price: BDT {price}</p>
                </div>
            </div>
        </>
    );
};

export default Card;