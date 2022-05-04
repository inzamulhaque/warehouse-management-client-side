import { useEffect, useState } from "react";

const useGetItems = (pageNum, itemsNum) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items?pageNum=${pageNum}&itemsNum=${itemsNum}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [pageNum, itemsNum]);

    return [items];
};

export default useGetItems;