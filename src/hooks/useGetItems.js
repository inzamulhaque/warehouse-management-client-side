import { useEffect, useState } from "react";

const useGetItems = (pageNum, itemsNum, deleteCount) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/items?pageNum=${pageNum}&itemsNum=${itemsNum}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [pageNum, itemsNum, deleteCount]);

    return [items];
};

export default useGetItems;