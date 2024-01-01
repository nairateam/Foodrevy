import React from "react";
import hero from "@/public/home/hero.png";
import Navigation from "../nav/Navigation";

const Hero = () => {
  return (
    <div
      className="bg-center bg-cover min-h-[100vh]"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      <Navigation />
      <div className="text-center p-20">
        <h2 className="text-[#EEE] text-[84px] font-semibold leading-[110px] px-[40px]">
          DISCOVER TOP RESTAURANTS NEAR YOU
        </h2>
        <p className="text-[#EEE] text-[24px] px-[15%] py-2">
          FoodRevy offers you an easy way to discover, experience, rate and
          review restaurants near you. Join us today!
        </p>
        <form action="" className="my-8 px-[15%] flex justify-center w-full">
          <span className="w-full">
            <input
              type="text"
              placeholder="Enter Restaurant, Bar"
              className="p-4 rounded-[50px] w-full"
            />
          </span>
          <button className="w-[180px] bg-[#FA5F05] p-4 rounded-[50px] text-[#EEE] border-[#EEE] ml-[-100px]">
            search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
