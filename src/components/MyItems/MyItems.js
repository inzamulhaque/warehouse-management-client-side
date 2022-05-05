import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Card from '../Card/Card';
import UpdateQty from '../Card/UpdateQty';

const MyItems = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [deleteCount, setDeleteCount] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [user, deleteCount]);

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
                <button className="bg-blue-500 my-2 text-white py-2 px-3 block font-semibold rounded-lg">{user?.email}</button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        items.map(item => <Card key={item._id} item={item}>
                            <UpdateQty id={item._id} />

                            <button onClick={() => navigate(`/inventory/${item._id}`)} className="my-2 py-2 px-3 w-full bg-blue-500 text-[22px] text-white font-semibold border-2 border-blue-500 duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-lg">Update</button>

                            <button onClick={() => handleDelete(item._id, item.name)} className="my-2 py-2 px-3 w-full bg-red-500 text-[22px] text-white font-semibold border-2 border-red-500 duration-300 ease-in-out hover:bg-transparent hover:text-red-500 rounded-lg">Delete</button>
                        </Card>)
                    }
                </div>
            </div>
        </>
    );
};

export default MyItems;