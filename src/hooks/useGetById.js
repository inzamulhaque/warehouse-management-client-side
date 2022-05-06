import React, { useEffect, useState } from 'react';

const useGetById = (id, updateCount) => {
    const [info, setInfo] = useState({
        _id: "",
        email: "",
        name: "",
        sname: "",
        price: 0,
        quantity: 0,
        image: "",
        description: ""
    });

    useEffect(() => {
        fetch(`https://assignment-11-phero.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data);
            });
    }, [id, updateCount]);

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setInfo({ ...info, [name]: value });
    }

    return [info, handleChange];
};

export default useGetById;