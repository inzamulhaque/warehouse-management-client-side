import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import JsVsNodeJS from './JsVsNodeJS';
import JwtQA from './JwtQA';
import NodeVsMongo0db from './NodeVsMongo0db';
import SqlVsNoSql from './SqlVsNoSql';

const Blogs = () => {
    return (
        <>
            {/* add page tilte */}
            <PageTitle title={"Blogs"} />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="my-2 py-2 px-3 card dark:bg-white h-100 mx-auto w-full">
                        <JsVsNodeJS />
                    </div>
                    <div className="my-2 py-2 px-3 card dark:bg-white h-100 mx-auto w-full">
                        <NodeVsMongo0db />
                    </div>
                    <div className="my-2 py-2 px-3 card dark:bg-white h-100 mx-auto w-full">
                        <SqlVsNoSql />
                    </div>
                    <div className="my-2 py-2 px-3 card dark:bg-white h-100 mx-auto w-full">
                        <JwtQA />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;