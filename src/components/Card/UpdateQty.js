import React from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateQty = (id) => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(`/updateqty/:${id}`)} className="px-3 py-2 w-full border-2 border-blue-500 bg-blue-500 text-[22px] text-white font-semibold duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-lg">
                Update Quantity
            </button>
        </>
    );
};

export default UpdateQty;