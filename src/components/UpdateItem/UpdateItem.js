import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [updateCount, setUpdateCount] = useState(0);
    const [item, setItem] = useState({});
    const [info, setInfo] = useState({
        email: "",
        name: "",
        sname: "",
        price: 0,
        quantity: 0,
        image: "",
        description: ""
    });

    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setInfo(data);
            });
    }, [id, updateCount]);

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setInfo({ ...info, [name]: value });
    }

    const handleUpdate = event => {
        event.preventDefault();

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                setUpdateCount(updateCount + 1);
                navigate("/manageitems");
            });
    }

    return (
        <>
            <div className="mt-3 p-3 px-5 container mx-auto w-full md:3/4 lg:w-1/2 card dark:bg-white">
                <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Update Item</h3>

                <form onSubmit={handleUpdate} className="p-3 md:px-5 lg:px-7">
                    <input name="id" type="text" className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required readOnly value={item._id} />

                    <input name="email" type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' value={info.email} onChange={handleChange} required />

                    <input name="name" type="text" placeholder='Enter Name*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' value={info.name} onChange={handleChange} required />

                    <input name="sname" type="text" placeholder='Enter Supplier Name*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' value={info.sname} onChange={handleChange} required />

                    <input name="price" type="number" placeholder='Price*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' value={info.price} onChange={handleChange} required />

                    <input name="quantity" type="number" placeholder='Quantity*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' onChange={handleChange} value={info.quantity} required />

                    <input name="image" type="text" placeholder='Image URL*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' value={info.image} onChange={handleChange} required />

                    <textarea name="description" className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' placeholder='Enter Short Description*' value={info.description} onChange={handleChange} required></textarea>

                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Update Item</button>
                </form>
            </div>
        </>
    );
};

export default UpdateItem;