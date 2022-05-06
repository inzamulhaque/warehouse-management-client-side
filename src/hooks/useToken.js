import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState("");
    const email = user?.user?.email;

    useEffect(() => {
        fetch(`https://assignment-11-phero.herokuapp.com/signin`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email }),
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("jotToken", data.jotToken);
                setToken(data.jotToken);
            })
    }, [user]);

    return [token];
};

export default useToken;