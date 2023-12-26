import React, { ChangeEvent } from 'react'

type InputProp = {
    label: string;
    type: string
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProp> = ({label, type, placeholder, value, onChange}) => {
  return (
    <div className='block py-4'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-[100%] p-4 rounded-[5px] bg-[#FFF] border-[1px] border-[#CECECE] rounded-[4px] mt-[4px]'
      />
    </div>
  )
}
