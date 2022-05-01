import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const VerifyEmail = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const sendVerificationEmail = async () => {
        await sendEmailVerification();
        toast.info('Check Your Email', {
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
        <div className='w-full md:w-3/4 lg:w-1/2 mt-3 mx-auto card dark:bg-white min-h-[200px] flex justify-center items-center'>
            <div>
                <h2 className="text-[25px] font-medium text-center dark:text-blue-500">
                    Please Verify Your Email!
                </h2>
                <button onClick={sendVerificationEmail} className="block mx-auto px-5 py-2 bg-green-500 text-[22px] font-medium rounded-lg text-white">
                    Send Verification Email
                </button>
            </div>
        </div>
    );
};

export default VerifyEmail;