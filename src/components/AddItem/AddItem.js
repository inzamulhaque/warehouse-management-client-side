import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageTitle from '../PageTitle/PageTitle';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleAddItem = event => {
        event.preventDefault();
        const email = user.email;
        const name = event.target.name.value;
        const sname = event.target.sname.value;
        const category = event.target.category.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;
        const description = event.target.description.value;

        const item = { email, name, sname, category, price, quantity, image, description };

        fetch("https://assignment-11-phero.herokuapp.com/additem", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        event.target.reset();
    }

    return (
        <>
            {/* add page tilte */}
            <PageTitle title={"Add Item"} />

            <div className="container mx-auto">
                <button onClick={() => navigate("/myitems")} className='bg-blue-500 text-[22px] text-white font-medium px-3 py-2 rounded-lg m-2'>
                    {user.email}
                </button>
                <button onClick={() => navigate("/myitems")} className='bg-orange-500 text-[22px] text-white font-medium px-3 py-2 rounded-lg m-2'>
                    My Items
                </button>

                <div className="mt-3 w-full md:w-3/4 lg:w-1/2 mx-auto card dark:bg-white py-2">
                    <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Add New Item</h3>

                    <form onSubmit={handleAddItem} className="p-3 md:px-5 lg:px-7">
                        <input name="name" type="text" placeholder='Enter Item Name*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <input name="sname" type="text" placeholder='Enter Item Supplier Name*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <input name="category" type="text" placeholder='Enter Item Category*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <input name="price" type="number" placeholder='Enter Item Price*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <input name="quantity" type="number" placeholder='Enter Item Quantity*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <input name="image" type="text" placeholder='Enter Item Image URL*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                        <textarea name="description" className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' placeholder='Enter Short Description*' required></textarea>

                        <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Add Item</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddItem;