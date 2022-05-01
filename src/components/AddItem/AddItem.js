import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <>
            <div className="container mx-auto">
                <button onClick={() => navigate("/myitems")} className='bg-blue-500 text-[22px] text-white font-medium px-3 py-2 rounded-lg m-2'>
                    {user.email}
                </button>
                <button onClick={() => navigate("/myitems")} className='bg-orange-500 text-[22px] text-white font-medium px-3 py-2 rounded-lg m-2'>
                    My Items
                </button>
            </div>
        </>
    );
};

export default AddItem;