import { useEffect, useState } from "react";

const useGetItems = (pageNum, itemsNum, deleteCount) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-phero.herokuapp.com/items?pageNum=${pageNum}&itemsNum=${itemsNum}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [pageNum, itemsNum, deleteCount]);

    return [items];
};

export default useGetItems;