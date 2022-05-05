import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetItems from '../../hooks/useGetItems';
import usePageCount from '../../hooks/usePageCount';
import Card from '../Card/Card';

const ManageItems = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [numberOfItems, setNumberOfItems] = useState(9);
    const [numberOfPage] = usePageCount(numberOfItems);
    const [deleteCount, setDeleteCount] = useState(0);
    const [items] = useGetItems(page, numberOfItems, deleteCount);

    const handleDelete = (id, name) => {
        const proceed = window.confirm(`are you sure? you want to delete ${name}`);
        if (proceed) {
            fetch(`http://localhost:5000/deleteitem/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => setDeleteCount(deleteCount + 1));
        }
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        items.map(item => <Card key={item._id} item={item}>
                            <button onClick={() => navigate(`/inventory/${item._id}`)} className="my-2 py-2 px-3 w-full bg-blue-500 text-[22px] text-white font-semibold border-2 border-blue-500 duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-lg">Update</button>

                            <button onClick={() => handleDelete(item._id, item.name)} className="my-2 py-2 px-3 w-full bg-red-500 text-[22px] text-white font-semibold border-2 border-red-500 duration-300 ease-in-out hover:bg-transparent hover:text-red-500 rounded-lg">Delete</button>
                        </Card>)
                    }
                </div>
            </div>

            <div className='text-center'>
                {
                    [...Array(numberOfPage).keys()].map(number => <button className={`border-2 m-[2px] border-black dark:border-white dark:text-white ${page === number && "dark:bg-white dark:text-black bg-black text-white"}`} onClick={() => setPage(number)} key={number}>{number + 1}</button>)
                }
                <select className='m-[2px]' onChange={e => setNumberOfItems(e.target.value)}>
                    <option value="6">6</option>
                    <option value="9" selected>9</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                </select>
            </div>
        </>
    );
};

export default ManageItems;