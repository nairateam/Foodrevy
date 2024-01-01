import React, { MouseEventHandler } from "react";
import { useState } from "react";
import Image from "next/image";

type HorizontalRuleProps = {
  color?: string;
};

type buttonProp = {
  btn: string;
  btnBG: string;
  btnColor: string;
  click: MouseEventHandler;
  disabled: boolean
};

type buttonIProp = {
  src: string;
  btn: string;
  btnBG: string;
  btnColor: string;
  click: MouseEventHandler;
};

type btn = {
  btn: string;
  btnBG: string;
  click: MouseEventHandler;
};
type prybtn = {
  btn: string;
  click: MouseEventHandler;
};

const HorizontalRule: React.FC<HorizontalRuleProps> = ({ color = "gray" }) => {
  return <hr className={`border-t border-${color}-300`} />;
};

export const Button: React.FC<buttonProp> = ({
  btn,
  btnBG,
  btnColor,
  click,
  disabled
}) => {
  return (
    <button
      onClick={click}
      disabled={disabled}
      className={`w-[100%] ${btnBG} p-4 rounded-[10px] ${btnColor} border-[1px] border-black my-[5px]`}
    >
      {btn}
    </button>
  );
};

export const ButtonIcon: React.FC<buttonIProp> = ({
  btn,
  btnBG,
  btnColor,
  src,
  click,
}) => {
  return (
    <button
      onClick={click}
      className={`flex gap-5 justify-center items-center w-[100%] bg-${btnBG} p-4 rounded-[10px] text-${btnColor} border-[1px] border-black my-[10px]`}
    >
      <Image src={src} alt="Icon" /> {btn}
    </button>
  );
};

export const Btn: React.FC<btn> = ({
  btn,
  btnBG,
  click,
}) => {
  return (
    <button
      onClick={click}
      className={`w-[180px] ${btnBG} p-4 rounded-[10px] text-[#EEE]`}
    >
      {btn}
    </button>
  );
};

export const PryBtn: React.FC<prybtn> = ({
  btn,
  click,
}) => {
  return (
    <button
    onClick={click}
    className={`w-[120px] md:w-[180px] p-2 md:p-4 bg-none rounded-[10px] text-[#EEE] border-[1px] border-[#EEE]`}
    >
      {btn}
    </button>
  );
};
