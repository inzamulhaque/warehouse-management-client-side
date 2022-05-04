import { useEffect, useState } from 'react';

const useOneSepicalQty = () => {
    const [oneSpecialQtyProduct, setOneSpecialQtyProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/sepicalQtyTwo")
            .then(res => res.json())
            .then(data => setOneSpecialQtyProduct(data));
    }, []);
    return [oneSpecialQtyProduct];
};

export default useOneSepicalQty;