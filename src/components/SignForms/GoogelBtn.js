import React from 'react';

const GoogelBtn = () => {
    return (
        <>
            <div className="flex items-center">
                {/* add or line */}
                <div className="w-1/2 h-[3px] bg-blue-500"></div>
                <div className="text-center text-[22px] font-normal">OR</div>
                <div className="w-1/2 h-[3px] bg-blue-500"></div>
            </div>
        </>
    );
};

export default GoogelBtn;