import React from "react";
import Navigation from "../Navigation/Navigation";

const ReusableHero = ({ title, description }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden font-dmSans bg-gradient-to-br from-[#070b24] to-[#2a1758]">
      <Navigation />
      <div className="relative z-20  flex flex-col justify-center  mx-auto   items-center  min-h-screen ">
        <h1 className="lg:text-6xl font-bold text-white leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg text-gray-300 mb-8">{description}</p>
      </div>
    </div>
  );
};

export default ReusableHero;
