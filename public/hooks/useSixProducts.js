import { useEffect, useState } from 'react';

const useSixProducts = () => {
    const [sixProducts, setSixProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/sixProducts")
            .then(res => res.json())
            .then(data => setSixProducts(data));
    }, []);
    return [sixProducts];
};

export default useSixProducts;