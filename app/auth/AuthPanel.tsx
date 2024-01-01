import React, { FormEvent, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import google from "@/public/auth/google.svg";
import apple from "@/public/auth/apple.svg";
import { useRouter } from "next/navigation";
import { Input } from "../components/Input";
import { Button, ButtonIcon } from "../components/Globals";
import { useAuthContext } from "./UserContext";
import { useModal } from "../context/ModalContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { toast } from "react-toastify";

export const AuthPanel = () => {
  const { modal, openModal, closeModal } = useModal();
  const { email, password, updateState } = useAuthContext();
  const router = useRouter();

  const handleInputChange = (field: string, value: string | boolean) => {
    updateState(field, value);
  };

  // useEffect(() => {
  //   // Check if the user is already authenticated on page load
  //   const authToken = localStorage.getItem("authToken");

  //   if (authToken) {
  //     // Redirect to the homepage if the user is already authenticated
  //     router.push("/");
  //   }
  // }, [router]);

  const handleSIgnIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in 
      toast('Signin successful!');
      const user = userCredential.user;
  
      // Get the user's ID token
      const idToken = await user.getIdToken();
  
      // Save the authentication token to localStorage
      localStorage.setItem('authToken', idToken);
  
      // Navigate to the homepage
      router.push('/');
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast(errorMessage);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Image src={logo} width={150} alt="Logo" />
        <Link href="/auth/signup">
          <button className="block bg-[#FEDFCD] rounded-[8px] p-2 px-4 font-medium text-[16px]">
            New here? Sign Up now!
          </button>
        </Link>
      </div>
      <div className="text-black py-[20px]">
        <p className="text-[32px] font-medium capitalize">Welcome back!</p>
        <p className="text-[18px]">Login to continue</p>
      </div>
      <form action="" className="">
        <Input
          label="Email"
          type="Email"
          placeholder="Email"
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
        <p onClick={openModal} className="text-[#FA5F05] my-4 cursor-pointer">
          Reset Password
        </p>
        <Button
          click={handleSIgnIn}
          btn="Log in"
          btnBG="bg-black"
          btnColor="text-white"
          disabled={false}
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
