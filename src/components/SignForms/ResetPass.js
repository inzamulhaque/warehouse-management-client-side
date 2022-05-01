import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ResetPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();

    const handleResetPassword = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        await sendPasswordResetEmail(email);
        toast.success('Please Check Your Email!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <>
            <div className="mt-3 p-3 px-5 container mx-auto w-full md:3/4 lg:w-1/2 card dark:bg-white">
                <h3 className="my-2 text-[25px] text-center font-bold text-blue-500">
                    Reset Password
                </h3>

                <form onSubmit={handleResetPassword} className="p-3 md:px-5 lg:px-7">
                    <input name="email" type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px] bg-transparent' required />

                    {error && <p className="text-[18px] font-normal text-red-400 before:content-['X'] before:text-[20px] before:mr-2 before:text-red-500">{error?.code}</p>}

                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Reset Password</button>
                </form>

                <p className="text-[18px] font-normal m-3 md:mx-5 lg:mx-7"> <span className="text-orange-500 dark:text-blue-500 cursor-pointer " onClick={() => navigate("/signin")}>Go To Sign In </span>
                </p>
            </div>
        </>
    );
};

export default ResetPass;