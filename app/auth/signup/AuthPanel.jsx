'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'
import google from '@/public/auth/google.svg'
import apple from '@/public/auth/apple.svg'
import { Input } from '../../components/Input'
import { Button, ButtonIcon } from '../../components/Globals'

export const AuthPanel = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
          <Image src={logo} width={150} alt="Logo" />
          <button className='block bg-[#FEDFCD] rounded-[8px] p-2 px-4 font-medium text-[16px]'>Already registered? Log in</button>
        </div>
        <div className="text-black py-[20px]">
            <p className='text-[32px] font-medium capitalize'>Create An Account...</p>
            <p className='text-[18px]'>Get started with us at FoodRevy</p>
        </div>
        <form action="" className=''>
            <Input 
            label="First Name"
            type='text'
            placeholder="Plat Adebayor"
            value=""
            onChange={(e)=>{

            }}
             />
             <Input 
            label="Last Name"
            type='text'
            placeholder="Adebayor Jnr"
            value=""
            onChange={(e)=>{

            }}
             />
             <Input 
            label="Email"
            type='email'
            placeholder="Email Address"
            value=""
            onChange={(e)=>{

            }}
             />
            <Input 
            label="Password"
            type='password'
            placeholder="Password"
            value="password"
            onChange={(e)=>{

            }}
             />
             <Input 
            label="Confirm Password"
            type='password'
            placeholder="Password"
            value="password"
            onChange={(e)=>{

            }}
             />
             <span className='flex gap-2 text-[#FA5F05] py-4 mt-[-5px]'>
                <input type="checkbox" name="" id="" />
                I agree to the FoodRevy TERMS OF SERVICE and PRIVACY POLICY
            </span>
             <Button btn="Sign Up" btnBG='black' btnColor='white' />
        </form>
        <div className="">
        <div className="flex items-center py-6 px-2">
            <hr className="flex-1 border-t border-[#AEAEAE]" />
                <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-1 border-t border-[#AEAEAE]" />
        </div>
        <div className="flex flex-col gap-2">
            <ButtonIcon src={google} btn='Continue with Google' btnColor='black' btnBG='transparent' />
            <ButtonIcon src={apple} btn='Continue with Apple' btnColor='black' btnBG='transparent' />
        </div>
        </div>
    </div>
  )
}
