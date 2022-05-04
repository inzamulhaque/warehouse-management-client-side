import { useEffect, useState } from 'react';

const UseOneMaxQty = () => {
    const [oneMaxQtyProduct, setOneMaxQtyProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/sepicalQtyOne")
            .then(res => res.json())
            .then(data => setOneMaxQtyProduct(data));
    }, []);
    return [oneMaxQtyProduct];
};

export default UseOneMaxQty;