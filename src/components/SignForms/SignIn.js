import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogelBtn from './GoogelBtn';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInuser, signInloading, signInError] = useAuthState(auth);

    const navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || (signInuser && !signInloading)) {
            navigate(from, { replace: true });
        }
    }, [user, signInuser]);

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <>
            <div className="mt-3 p-3 px-5 container mx-auto w-full md:3/4 lg:w-1/2 card dark:bg-white">
                <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Sign In</h3>
                {/* Sign In Form */}
                <form onSubmit={handleSignIn} className='className="p-3 md:px-5 lg:px-7'>

                    <input name="email" type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                    <input name="password" type="password" placeholder='Enter Your Passwoed*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                    {error && <p className="text-[18px] font-normal text-red-400 before:content-['X'] before:text-[20px] before:mr-2 before:text-red-500">{error?.code}</p>}

                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Sign In</button>
                </form>
                <p className="text-[18px] font-normal m-3 md:mx-5 lg:mx-7">
                    You've No Account? <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/signup")}> Sign Up </span>
                </p>
                <p className="text-[18px] font-normal m-3 md:mx-5 lg:mx-7">
                    ForGot Your Password? <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/resetpass")}> Reset Password </span>
                </p>
                <GoogelBtn />
            </div>
        </>
    );
};

export default SignIn;