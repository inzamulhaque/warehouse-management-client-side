import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogelBtn from './GoogelBtn';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [myError, setMyError] = useState("");
    const [signInUser, signInLoading, signInError] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    useEffect(() => {
        if ((user && (!error && !loading)) && (signInUser && (!signInError && !signInLoading))) {
            // stop auto sign in
            signOut(auth);
            // for auto sign in
            navigate("/signin");
        }
    }, [user, signInUser]);

    const handleEmailChange = event => {
        setEmail(event.target.value);
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value)) {
            setMyError("Please Enter Valid Email")
        } else {
            setMyError("");
        }
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
        if (!/^(?=.*[A-Za-z]).{6,}$/.test(event.target.value)) {
            setMyError("password must be 6 character or more and one lower and upper case later both");
        } else {
            setMyError("");
        }
    }

    const handleConfirmPasswordChange = event => {
        const cPassword = event.target.value;
        if (cPassword === password) {
            setCPassword(cPassword);
            setMyError("");
        } else {
            setMyError("password and confirm password are not match");
        }
    }

    const handleSignUp = event => {
        event.preventDefault();
        if (password === cPassword) {
            createUserWithEmailAndPassword(email, password);
            toast.success('Please Verify Your Email And Sign In!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setMyError("password and confirm password are not match");
        }
    }

    return (
        <>
            <div className="mt-3 p-3 px-5 container mx-auto w-full md:3/4 lg:w-1/2 card dark:bg-white">
                <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">Sign Up</h3>
                {/* Sign Up Form */}

                <form onSubmit={handleSignUp} className='className="p-3 md:px-5 lg:px-7'>
                    <input onChange={handleEmailChange} type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                    <input onChange={handlePasswordChange} type="password" placeholder='Enter Your Passwoed*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                    <input onChange={handleConfirmPasswordChange} type="password" placeholder='Enter Your Confirm Passwoed*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                    <p>
                        <input type="checkbox" required /> agree with terms and conditions
                    </p>

                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Sign Up</button>

                    {(myError || error) && <p className="text-[18px] font-normal text-red-400 before:content-['X'] before:text-[20px] before:mr-2 before:text-red-500">{myError || error?.code}</p>}
                </form>
                <p className="text-[18px] font-normal m-3 md:mx-5 lg:mx-7">
                    You've An Account? <span className="text-orange-300 cursor-pointer" onClick={() => navigate("/signin")}> Sign In </span>
                </p>
                <GoogelBtn />
            </div>
        </>
    );
};

export default SignUp;