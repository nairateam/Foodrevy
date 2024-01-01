import React from 'react'
import Image from 'next/image'
import logImage from '@/public/auth/login.png'
import { AuthPanel } from './AuthPanel'

const Page = () => {
  return (
    <div className='bg-[#F2F2F2;] flex justify-between gap-[50px] p-8'>
        <div className='basis-1/2'>
            <Image src={logImage} alt="Update Password" />
        </div>
        <div className='basis-1/2'>
            <AuthPanel />
        </div>
    </div>
  )
}

export default Page