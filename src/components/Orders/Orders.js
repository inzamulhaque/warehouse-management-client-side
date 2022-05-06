import React from 'react';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate();

    const handleOrders = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const itemName = event.target.itemName.value;
        const email = event.target.email.value;
        const quantity = event.target.quantity.value;

        const orderData = { name, itemName, email, quantity };

        fetch("https://assignment-11-phero.herokuapp.com/addorders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        event.target.reset();
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="mt-3 w-full md:w-3/4 lg:w-1/2 mx-auto card dark:bg-white py-2">
                    <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Add Orders</h3>

                    <form onSubmit={handleOrders} className="p-3 md:px-5 lg:px-7">
                        <input name="name" type="text" placeholder='Enter Customer Name*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <input name="itemName" type="text" placeholder='Enter Item Name*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <input name="email" type="email" placeholder='Enter Customer Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <input name="quantity" type="number" placeholder='Enter Item Quantity*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Add Orders</button>
                    </form>
                    <p className="text-[18px] font-medium m-3 md:mx-5 lg:mx-7 text-orange-500 cursor-pointer" onClick={() => navigate("/showorders")}>
                        Show Orders
                    </p>
                </div>
            </div>
        </>
    );
};

export default Orders;