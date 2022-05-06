import { useEffect, useState } from 'react';

const useOneSepicalQty = () => {
    const [oneSpecialQtyProduct, setOneSpecialQtyProduct] = useState([]);
    useEffect(() => {
        fetch("https://assignment-11-phero.herokuapp.com/sepicalQtyTwo")
            .then(res => res.json())
            .then(data => setOneSpecialQtyProduct(data));
    }, []);
    return [oneSpecialQtyProduct];
};

export default useOneSepicalQty;