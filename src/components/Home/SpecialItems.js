import React from 'react';
import { useNavigate } from 'react-router-dom';
import useOneMaxQty from '../../hooks/UseOneMaxQty';
import Card from '../Card/Card';

const SpecialItems = () => {
    const navigate = useNavigate();
    const [oneMaxQtyProduct] = useOneMaxQty();
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    oneMaxQtyProduct.map(item => <Card key={item._id} item={item}>
                        <button onClick={() => navigate(`/inventory/${item._id}`)} className="my-2 py-2 px-3 w-full bg-blue-500 text-[22px] text-white font-semibold border-2 border-blue-500 duration-300 ease-in-out hover:bg-transparent hover:text-blue-500 rounded-lg">Update</button>
                    </Card>)
                }
            </div>
        </>
    );
};

export default SpecialItems;