"use client";
import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import google from "@/public/auth/google.svg";
import apple from "@/public/auth/apple.svg";
import { Input } from "../../components/Input";
import { Button, ButtonIcon } from "../../components/Globals";
import { useAuthContext } from "../UserContext";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { toast } from "react-toastify";

export const AuthPanel = () => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    isChecked,
    updateState,
  } = useAuthContext();

  const handleInputChange = (field: string, value: string | boolean) => {
    updateState(field, value);
  };

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Use Firebase authentication to create a new user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // You can access the new user information if needed
      const user = userCredential.user;

      // Send Verification
      await sendEmailVerification(user);

      // Perform additional actions if signup is successful
      console.log("Signup successful!", user);
      toast("Signup successful! Kindly check your email");
    } catch (error: any) {
      // Handle signup errors
      console.error("Signup error:", error);
      toast("Signup error:", error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Image src={logo} width={150} alt="Logo" />
        <Link href="/auth/login">
          <button className="block bg-[#FEDFCD] rounded-[8px] p-2 px-4 font-medium text-[16px]">
            Already registered? Log in
          </button>
        </Link>
      </div>
      <div className="text-black py-[20px]">
        <p className="text-[32px] font-medium capitalize">
          Create An Account...
        </p>
        <p className="text-[18px]">Get started with us at FoodRevy</p>
      </div>

      {/* Signup Form */}

      <form action="" className="">
        <Input
          label="First Name"
          type="text"
          placeholder="Plat Adebayor"
          value={firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        <Input
          label="Last Name"
          type="text"
          placeholder="Adebayor Jnr"
          value={lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
        />
        <span className="flex gap-2 text-[#000] py-4 mt-[-5px]">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => handleInputChange("isChecked", e.target.checked)}
          />
          I agree to the FoodRevy{" "}
          <span className="text-[#FA5F05]">TERMS OF SERVICE</span> and{" "}
          <span className="text-[#FA5F05]">PRIVACY POLICY</span>
        </span>
        <Button
          click={handleSignup}
          btn="Sign Up"
          btnBG="bg-black"
          btnColor="text-white"
        />
      </form>

      <div className="">
        <div className="flex items-center py-6 px-2">
          <hr className="flex-1 border-t border-[#AEAEAE]" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-1 border-t border-[#AEAEAE]" />
        </div>
        <div className="flex flex-col gap-2">
          <ButtonIcon
            click={(e) => {}}
            src={google}
            btn="Continue with Google"
            btnColor="black"
            btnBG="transparent"
          />
          <ButtonIcon
            click={(e) => {}}
            src={apple}
            btn="Continue with Apple"
            btnColor="black"
            btnBG="transparent"
          />
        </div>
      </div>
    </div>
  );
};
