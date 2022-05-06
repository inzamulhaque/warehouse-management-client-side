import { useEffect, useState } from 'react';

const UseOneMaxQty = () => {
    const [oneMaxQtyProduct, setOneMaxQtyProduct] = useState([]);
    useEffect(() => {
        fetch("https://assignment-11-phero.herokuapp.com/sepicalQtyOne")
            .then(res => res.json())
            .then(data => setOneMaxQtyProduct(data));
    }, []);
    return [oneMaxQtyProduct];
};

export default UseOneMaxQty;