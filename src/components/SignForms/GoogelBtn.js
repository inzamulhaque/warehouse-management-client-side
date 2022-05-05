import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router';
import google from '../../images/icons/google.png';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const GoogelBtn = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [token] = useToken(googleUser);

    const navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token && !googleLoading) {
            navigate(from, { replace: true });
        }
    }, [googleUser]);

    return (
        <>
            <div className="flex items-center">
                {/* add or line */}
                <div className="w-1/2 h-[3px] bg-blue-500"></div>
                <div className="text-center text-[22px] font-normal">OR</div>
                <div className="w-1/2 h-[3px] bg-blue-500"></div>
            </div>
            <button onClick={() => signInWithGoogle()} className="flex py-2 px-3 items-center bg-[#FF4B26] rounded-lg text-[20px] text-white font-bold block mx-auto border-2 border-[#FF4B26] duration-300 easy-in-out hover:bg-transparent hover:text-[#FF4B26]">
                <img className="w-[20px] h-[20px]" src={google} alt="google icon" /> &nbsp;
                Sign In With Google
            </button>
            {
                googleError && <p className="text-[20px] text-red-500 font-medium">{googleError?.code}</p>
            }
        </>
    );
};

export default GoogelBtn;