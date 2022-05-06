import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const ShowOrders = () => {
    const [orders, setOrders] = useState([]);
    const [countDelete, setCountDelete] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/getorders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [countDelete]);

    const handleDeleteOrder = (id, email) => {
        const proceed = window.confirm(`Are You Sure? You want to delete ${email}`);
        if (proceed) {
            fetch(`http://localhost:5000/deleteorder/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => setCountDelete(countDelete + 1));
        }
    }

    return (
        <>
            <div className="mx-auto container">
                <table className="table-auto border-collapse border-2 border-slate-400 w-full dark:text-white">
                    <thead>
                        <tr>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Customer Name</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Customer Email</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Item Name</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Item Quantity</th>
                            <th className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-red-500'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr key={order._id} className="text-center">
                                <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>{order.name}</td>
                                <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>{order.email}</td>
                                <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>{order.itemName}</td>
                                <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>{order.quantity}</td>
                                <td className='border md:border-2 border-slate-300 md:py-1 md:px-2 text-red-300'>
                                    <FontAwesomeIcon icon={faTrash} className="cursor-pointer" onClick={() => handleDeleteOrder(order._id, order.email)} />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShowOrders;