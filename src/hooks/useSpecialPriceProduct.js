import { useEffect, useState } from 'react';

const useSpecialPriceProduct = () => {
    const [oneSpecialPrice, setOneSpecialPrice] = useState([]);
    useEffect(() => {
        fetch("https://assignment-11-phero.herokuapp.com/sepicalQtyOne")
            .then(res => res.json())
            .then(data => setOneSpecialPrice(data));
    }, []);
    return [oneSpecialPrice];
};

export default useSpecialPriceProduct;