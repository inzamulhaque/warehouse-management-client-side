import React, { useState } from 'react';
import usePageCount from '../../hooks/usePageCount';

const ManageItems = () => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12);
    const [numberOfPage] = usePageCount(size);
    return (
        <>

            <div className='pagination text-center'>
                {
                    [...Array(numberOfPage).keys()].map(number => <button className={`border-2 m-[2px] border-black dark:border-white dark:text-white ${page === number && "dark:bg-white dark:text-black bg-black text-white"}`} onClick={() => setPage(number)} key={number}>{number + 1}</button>)
                }
                <select className='m-[2px]' onChange={e => setSize(e.target.value)}>
                    <option value="6">6</option>
                    <option value="12" selected>12</option>
                    <option value="24">24</option>
                </select>
            </div>
        </>
    );
};

export default ManageItems;