import React from 'react';

const SqlVsNoSql = () => {
    return (
        <>
            <h3 className="text-[25px] font-semibold dark:text-blue-400 m-2">Differences between sql and nosql databases.</h3>
            <div className="m-2">
                <table className="table-auto border-collapse border-2 border-slate-400 w-full dark:text-black">
                    <thead className='dark:text-blue-400'>
                        <th className="border md:border-2 border-slate-300 md:py-1 md:px-2">SQL</th>
                        <th className="border md:border-2 border-slate-300 md:py-1 md:px-2">NO-SQL</th>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>RELATIONAL DATABASE MANAGEMENT SYSTEM</td>
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>Non-relational or distributed database system.</td>
                        </tr>
                        <tr className="text-center">
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>এটি একটি fix Structure প্রদান করে</td>
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>এর Structure fix না</td>
                        </tr>
                        <tr className="text-center">
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>এটি data গুলো Table format হিসেবে সংরক্ষণ করে</td>
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>এটি data গুলো BSON format হিসেবে সংরক্ষণ করে</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SqlVsNoSql;