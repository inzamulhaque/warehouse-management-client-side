import React from 'react';

const Card = ({ item, children }) => {
    const { name, sname, category, price, quantity, image, description } = item || {};
    return (
        <>
            <div className="my-2 py-2 px-3 card dark:bg-white h-100 mx-auto w-full">
                <div className="w-[125px] h-[150px] mx-auto">
                    <img src={image} alt="Item Image" className="h-[150px]" />
                </div>
                <div className="my-3">
                    <h3 className="text-[25px] font-bold">{name}</h3>
                    <p className="tex-[22px] font-medium">Price: BDT {price}</p>
                    <p className="tex-[18px] font-medium">Category: {category}</p>
                    <p className="tex-[18px] font-medium">Quantity: {quantity}</p>
                    <p className="tex-[18px] font-medium">Supplier Name: {sname}</p>
                    <p className="tex-[16px] font-normal">{description}</p>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Card;