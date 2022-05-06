import React from 'react';

const JwtQA = () => {
    return (
        <>
            <h3 className="text-[25px] font-semibold dark:text-blue-400 m-2">What is the purpose of jwt and how does it work</h3>
            <div className="m-2">
                <p className="text-[20px] font-medium text-justify">
                    এটি securely information গুলো client side থেকে server side এ পাঠায়। এতে যার access নাই বা যে user authorize না তাকে data access দেওয়া হয় না। SignIn করার সময় server থেকে একটি jsonwebtoken তৈরি করে। সেই token টা server থেকে client side এ আসে। এই token client side এ stor করে। যখন client side থেকে server side এ Request পাঠানো হয় তখন Request এর সাথে এই token পাঠানো হয়। এবং server এটিকে verify করে। Token ঠিক থাকলে data দেয় আর ঠিক না থাকলে data দেয় না।
                </p>
            </div>
        </>
    );
};

export default JwtQA;