import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.png";
import { Btn, PryBtn } from "../Globals";
import { auth } from "@/app/auth/FirebaseConfig";
import { signOut } from "firebase/auth";

const Navigation = () => {
    const router = useRouter();
  
    // Initialize user state from localStorage on component mount
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user") || "null");
    const [user, setUser] = React.useState(userFromLocalStorage);
  
    useEffect(() => {
      // Update user state when user logs in or out
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
          localStorage.setItem("user", JSON.stringify(authUser));
        } else {
          setUser(null);
          localStorage.removeItem("user");
        }
      });
  
      // Clean up the subscription when the component unmounts
      return () => unsubscribe();
    }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      // Clear user details from localStorage
      localStorage.removeItem("user");
      // Redirect the user to the login page
      router.replace("/auth/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="p-4 sm:px-[20px] lg:px-[40px] flex justify-between items-center">
      <Image src={logo} alt="Foodrevy" className="w-[120px] md:w-[150px] lg:w-[200px]" />
      <ul className="hidden text-[#EEE] sm:flex items-center gap-20 text-[#EEE]">
        <li>Home</li>
        <li>Menu</li>
        <li>Blog</li>
        <li>About Us</li>
      </ul>
      <span className="flex items-center gap-8">
        {user ? (
          <PryBtn btn="Logout" click={handleSignOut} />
        ) : (
          <Link href="/auth/login">
            <PryBtn btn="Login" click={(e) => {}} />
          </Link>
        )}
        <Link href="/" className="hidden sm:block">
          <Btn btn="Write a Review" btnBG="bg-[#FA5F05]" click={(e) => {}} />
        </Link>
      </span>
    </div>
  );
};

export default Navigation;
