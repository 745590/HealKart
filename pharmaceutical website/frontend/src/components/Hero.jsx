import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="mt-6 flex w-full justify-center px-4">
      <div className="w-full max-w-7xl h-[420px] bg-gradient-to-r from-green-400 to-green-100 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row justify-between items-center px-10 py-8">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Welcome to <span className="text-white drop-shadow">HealKart</span>
          </h1>
          <p className="text-white text-lg mb-6">
            Your health, our priority. Explore trusted medicines and expert
            advice.
          </p>
          <button className=" cursor-pointer bg-white text-green-600 font-semibold px-6 py-3 rounded-full hover:bg-green-200 transition duration-300 shadow">
            Shop Now
          </button>
        </div>

        {/* Right Side - Hero Image */}
        <div className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
          <img
            src={assets.hero_img}
            alt="Medicines"
            className="h-[400px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
