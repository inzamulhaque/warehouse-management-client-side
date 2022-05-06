import React from 'react';

const JsVsNodeJS = () => {
    return (
        <>
            <h3 className="text-[25px] font-semibold dark:text-blue-400 m-2">Difference between javascript and nodejs</h3>
            <div className="m-2">
                <table className="table-auto border-collapse border-2 border-slate-400 w-full dark:text-black">
                    <thead className='dark:text-blue-400'>
                        <th className="border md:border-2 border-slate-300 md:py-1 md:px-2">JavaScript</th>
                        <th className="border md:border-2 border-slate-300 md:py-1 md:px-2">NodeJS</th>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>JavaScript একটি Programming language</td>
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>NodeJS হলো JavaScript এর Run-Time Environment</td>
                        </tr>
                        <tr className="text-center">
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>JavaScript শুধুমাত্র browser গুলোতে use করা যায়</td>
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>NodeJS এর সাহায্যে browser এর বাহিরে ও JavaScript use করা যায়</td>
                        </tr>
                        <tr className="text-center">
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>JavaScript শুধুমাত্র Client-Side এর জন্য </td>
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>NodeJS বেশিরভাগ সময় Server-Side এর জন্য ব্যবহৃত হয়</td>
                        </tr>
                        <tr className="text-center">
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>JavaScript সব javascriprt engine এ run করতে পারে </td>
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>NodeJS V8 engine use করে</td>
                        </tr>
                        <tr className="text-center">
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>JavaScript frontend development এর জন্য ব্যবহৃত হয় </td>
                            <td className='border md:border-2 border-slate-300 md:py-1 md:px-2'>NodeJS server-side development এর জন্য ব্যবহৃত হয়</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default JsVsNodeJS;