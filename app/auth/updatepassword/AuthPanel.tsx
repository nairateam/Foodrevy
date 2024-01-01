'use client'
import React, { FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import { Input } from '@/app/components/Input'
import { Button } from '@/app/components/Globals'
import { useAuthContext } from '../UserContext'
import { updatePassword } from 'firebase/auth'
import { auth } from '../FirebaseConfig'
import { toast } from 'react-toastify';

export const AuthPanel = () => {

  const { password, confirmPassword, updateState } = useAuthContext();

  const handleInputChange = (field: string, value: string | boolean) => {
      updateState(field, value);
    };

    const user = auth.currentUser;
    const newPassword = confirmPassword;

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
      
        if (!user) {
          toast('User not authenticated.');
          return;
        }
      
        try {
          await updatePassword(user, newPassword);
          if (confirmPassword !== password){
            toast('Passwords do not match!')
            return 
          // Password updated successfully
          toast('Password updated successfully!'); 
        }
        } catch (error) {
          // Handle password update error
          const errorMessage = (error as { message?: string })?.message || 'An error occurred while updating the password.';
          toast(errorMessage);
        }
      };

  return (
    <div>
        <div className='flex justify-between items-center'>
          <Image src={logo} width={150} alt="Logo" />
          <Link href='/auth/signup'>
            <button className='block bg-[#FEDFCD] rounded-[8px] p-2 px-4 font-medium text-[16px]'>New here? Sign Up now!</button>
          </Link>
        </div>
        <div className="text-black py-[20px]">
            <p className='text-[32px] font-medium capitalize'>Password Update</p>
            <p className='text-[18px]'>Please update your password information</p>
        </div>
        <form action="" className=''>
            <Input 
            label="New Password"
            type='password'
            placeholder="Password"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
             />
            <Input 
            label="Confirm Password"
            type='password'
            placeholder="password"
            value={confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
             />
             <Button click={handleUpdate} btn="Continue" btnBG='bg-black' btnColor='text-white' disabled={false} />
        </form>
    </div>
  )
}
