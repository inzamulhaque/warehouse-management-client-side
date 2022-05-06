import { useEffect, useState } from 'react';

const useSixProducts = () => {
    const [sixProducts, setSixProducts] = useState([]);
    useEffect(() => {
        fetch("https://assignment-11-phero.herokuapp.com/sixProducts")
            .then(res => res.json())
            .then(data => setSixProducts(data));
    }, []);
    return [sixProducts];
};

export default useSixProducts;