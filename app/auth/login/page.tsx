'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logImage from '@/public/auth/login.png'
import { AuthPanel } from '../AuthPanel'
import { useModal } from '@/app/context/ModalContext'
import ForgotPassword from './ForgotPassword'

const Page = () => {

  const { modal, openModal, closeModal } = useModal();

  return (
    <>
    <div className='bg-[#F2F2F2;] flex justify-between gap-[50px] p-8'>
        <div className='basis-1/2'>
            <Image src={logImage} alt="Login" />
        </div>
        <div className='basis-1/2'>
            <AuthPanel />
        </div>
    </div>
    {
      modal && <ForgotPassword />
    }
    </>
  )
}

export default Page