import React, { MouseEventHandler } from 'react'
import Image from 'next/image'

type HorizontalRuleProps = {
    color?: string;
  };

type buttonProp = {
    btn: string;
    btnBG: string;
    btnColor: string
    click: MouseEventHandler
}

type buttonIProp = {
    src: string;
    btn: string;
    btnBG: string;
    btnColor: string
    click: MouseEventHandler
}

const HorizontalRule: React.FC<HorizontalRuleProps> = ({ color = 'gray' }) => {
    return <hr className={`border-t border-${color}-300`} />;
  };

export const Button: React.FC<buttonProp> = ({btn, btnBG, btnColor, click}) => {
  return (
    <button onClick={click} className={`w-[100%] bg-black p-4 rounded-[10px] text-[#FFF] border-[1px] border-black my-[5px]`}>
        {btn}
    </button>
  )
}

export const ButtonIcon: React.FC<buttonIProp> = ({btn, btnBG, btnColor, src, click}) => {
    return (
      <button onClick={click} className={`flex gap-5 justify-center items-center w-[100%] bg-${btnBG} p-4 rounded-[10px] text-${btnColor} border-[1px] border-black my-[10px]`}>
          <Image src={src} alt='Icon' /> {btn}
      </button>
    )
  }
