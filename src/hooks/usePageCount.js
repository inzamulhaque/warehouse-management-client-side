import { useEffect, useState } from "react";

const usePageCount = (itemNumber) => {
    const [numberOfPage, setNumberOfPage] = useState(0);
    useEffect(() => {
        fetch("https://assignment-11-phero.herokuapp.com/itemscount")
            .then(res => res.json())
            .then(data => {
                const pages = Math.ceil(data / itemNumber);
                setNumberOfPage(pages);
            });
    }, [itemNumber]);
    return [numberOfPage];
};

export default usePageCount;