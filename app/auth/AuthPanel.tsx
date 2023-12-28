'use client'
import React, { FormEvent } from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'
import google from '@/public/auth/google.svg'
import apple from '@/public/auth/apple.svg'
import { Input } from '../components/Input'
import { Button, ButtonIcon } from '../components/Globals'
import { useAuthContext } from './UserContext'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './FirebaseConfig'

export const AuthPanel = () => {
  const { email, password, updateState } = useAuthContext();

  const handleInputChange = (field: string, value: string | boolean) => {
      updateState(field, value);
    };

  const handleSIgnIn = (e: FormEvent) => {
    console.log(`Name: ${email}`)
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    console.log('Sign In')
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
  }

  return (
    <div>
        <div className='flex justify-between items-center'>
          <Image src={logo} width={150} alt="Logo" />
          <button className='block bg-[#FEDFCD] rounded-[8px] p-2 px-4 font-medium text-[16px]'>New here? Sign Up now!</button>
        </div>
        <div className="text-black py-[20px]">
            <p className='text-[32px] font-medium capitalize'>Welcome back!</p>
            <p className='text-[18px]'>Login to continue</p>
        </div>
        <form action="" className=''>
            <Input 
            label="Email"
            type='Email'
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
             />
            <Input 
            label="Password"
            type='password'
            placeholder="Password"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
             />
             <p className='text-[#FA5F05] my-4'>Reset Password</p>
             <Button click={handleSIgnIn} btn="Log in" btnBG='black' btnColor='white' />
        </form>
        <div className="">
        <div className="flex items-center py-6 px-2">
            <hr className="flex-1 border-t border-[#AEAEAE]" />
                <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-1 border-t border-[#AEAEAE]" />
        </div>
        <div className="flex flex-col gap-2">
            <ButtonIcon click={e=>{}} src={google} btn='Continue with Google' btnColor='black' btnBG='transparent' />
            <ButtonIcon click={e=>{}} src={apple} btn='Continue with Apple' btnColor='black' btnBG='transparent' />
        </div>
        </div>
    </div>
  )
}
