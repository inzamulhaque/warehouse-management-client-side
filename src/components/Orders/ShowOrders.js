import React, { useEffect, useState } from 'react';

const ShowOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/getorders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    return (
        <>
            <div className="mx-auto container">
                <table className="table-auto border-collapse border-2 border-slate-400 w-full dark:text-white">
                    <thead>
                        <tr>
                            <th className='border-2 border-slate-300 py-1 px-2'>Customer Name</th>
                            <th className='border-2 border-slate-300 py-1 px-2'>Customer Email</th>
                            <th className='border-2 border-slate-300 py-1 px-2'>Item Name</th>
                            <th className='border-2 border-slate-300 py-1 px-2'>Item Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr key={order._id} className="text-center">
                                <td className='border-2 border-slate-300 py-1 px-2'>{order.name}</td>
                                <td className='border-2 border-slate-300 py-1 px-2'>{order.email}</td>
                                <td className='border-2 border-slate-300 py-1 px-2'>{order.itemName}</td>
                                <td className='border-2 border-slate-300 py-1 px-2'>{order.quantity}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShowOrders;