import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetById from '../../hooks/useGetById';

const UpdateQty = () => {
    const { id } = useParams();
    const [updateCount, setUpdateCount] = useState(0);
    const [addQty, setAddQty] = useState(0);

    const [info] = useGetById(id, updateCount);

    const handleDelivered = () => {
        const qty = parseInt(info.quantity) - 1;

        const newData = { ...info, quantity: qty };

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                setUpdateCount(updateCount + 1);
            });
    }

    const handleRestock = () => {
        const qty = (parseInt(info.quantity) + parseInt(addQty));

        // const newData = { email: info.email, name: info.name, sname: info.sname, price: info.price, quantity: qty, image: info.image, description: info.description };

        const newData = { ...info, quantity: qty };

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                setUpdateCount(updateCount + 1);
                setAddQty(0);
            });
    }

    return (
        <>
            <div className="mt-3 p-3 px-5 container mx-auto w-full md:3/4 lg:w-1/2 card dark:bg-white">
                <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Update Quantity</h3>
                <div className="p-3 md:px-5 lg:px-7">
                    <div className="w-[125px] h-[150px] mx-auto">
                        <img src={info.image} alt="Item Image" className="h-[150px]" />
                    </div>
                    <div className="my-3">
                        <h3 className="text-[25px] font-bold">{info.name}</h3>
                        <p className="tex-[22px] font-medium">Id: {info._id}</p>
                        <p className="tex-[22px] font-medium">Email: {info.email}</p>
                        <p className="tex-[22px] font-medium">Price: BDT {info.price}</p>
                        <p className="tex-[18px] font-medium">Category: {info.category}</p>
                        <p className="tex-[18px] font-medium">Quantity: {info.quantity}</p>
                        <p className="tex-[18px] font-medium">Supplier Name: {info.sname}</p>
                        <p className="tex-[16px] font-normal">{info.description}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center flex-wrap">
                            <button onClick={handleDelivered} className="py-1 px-2 text-[18px] font-medium tex-[18px] bg-red-500 text-white rounded-lg">
                                Delivered
                            </button>

                            <input onChange={(e) => setAddQty(e.target.value)} type="number" className="border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent" placeholder="Enter Quantity" value={addQty} />

                            <button onClick={handleRestock} className="py-1 px-2 text-[18px] font-medium tex-[18px] bg-green-500 text-white rounded-lg">
                                Restock
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateQty;