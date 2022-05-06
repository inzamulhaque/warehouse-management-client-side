import React from 'react';
import JsVsNodeJS from './JsVsNodeJS';
import NodeVsMongo0db from './NodeVsMongo0db';

const Blogs = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="my-2 py-2 px-3 card dark:bg-white h-100 mx-auto w-full">
                        <JsVsNodeJS />
                    </div>
                    <div className="my-2 py-2 px-3 card dark:bg-white h-100 mx-auto w-full">
                        <NodeVsMongo0db />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;