import { Button } from '@/app/components/Globals';
import { Input } from '@/app/components/Input'
import React, { useState } from 'react'
import { useModal } from '@/app/context/ModalContext';
import { auth } from '../FirebaseConfig';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword: React.FC = () => {

    const { closeModal } = useModal();
    const [ email, setEmail ] = useState('');
    const [ isDisabled, setIsDisabled ] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value
        setEmail(e.target.value);
        setEmail(newEmail);
        setIsDisabled(newEmail.trim() === '');
    };

    const resetPassword = () =>{
        if (!email.trim()) {
            toast('Email cannot be empty!');
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
          toast('Password reset email sent!')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000a1] flex items-center justify-center z-40">
        <div className='flex flex-col gap-[10px] bg-[#FFF] p-8 pt-10 rounded-[8px] max-w-[500px] relative z-50'>
            <span onClick={closeModal} className='absolute top-8 right-8 cursor-pointer'>X</span>
            <h4 className='text-[#050707] text-[26px] font-semibold'>Forgot Password</h4>
            <p>Enter the email associated with your account 
                and we will email you a link to reset your password
            </p>
            <form action="">
                <Input 
                label="Email"
                type='email'
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange} />
                <span className='flex flex-col gap-[10px]'>
                    <Button click={resetPassword} btn='Submit' btnBG='bg-[#000]' btnColor='text-[#FFF]' disabled={isDisabled} />
                    <Button click={closeModal} btn='Cancel' btnBG='bg-[#CECECE]' btnColor='text-[#0B0B0B]' disabled={false} />
                </span>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword