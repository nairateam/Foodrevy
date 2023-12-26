import React from 'react'
import Image from 'next/image'

type HorizontalRuleProps = {
    color?: string;
  };

type buttonProp = {
    btn: string;
    btnBG: string;
    btnColor: string
}

type buttonIProp = {
    src: string;
    btn: string;
    btnBG: string;
    btnColor: string
}

const HorizontalRule: React.FC<HorizontalRuleProps> = ({ color = 'gray' }) => {
    return <hr className={`border-t border-${color}-300`} />;
  };

export const Button: React.FC<buttonProp> = ({btn, btnBG, btnColor}) => {
  return (
    <button className={`w-[100%] bg-${btnBG} p-4 rounded-[10px] text-${btnColor} border-[1px] border-black my-[5px]`}>
        {btn}
    </button>
  )
}

export const ButtonIcon: React.FC<buttonIProp> = ({btn, btnBG, btnColor, src}) => {
    return (
      <button className={`flex gap-5 justify-center items-center w-[100%] bg-${btnBG} p-4 rounded-[10px] text-${btnColor} border-[1px] border-black my-[10px]`}>
          <Image src={src} alt='Icon' /> {btn}
      </button>
    )
  }
