import { useEffect, useState } from 'react';

const useSpecialPriceProduct = () => {
    const [oneSpecialPrice, setOneSpecialPrice] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/sepicalQtyOne")
            .then(res => res.json())
            .then(data => setOneSpecialPrice(data));
    }, []);
    return [oneSpecialPrice];
};

export default useSpecialPriceProduct;