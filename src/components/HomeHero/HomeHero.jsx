import React from "react";
import Navigation from "../Navigation/Navigation";
import shield from "../../assets/shield.png";

const HomeHero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-dmSans bg-gradient-to-br from-[#070b24] to-[#2a1758]">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Restoring Trust in Web3 Security
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Lysander adds a security layer to blockchain transactions,
            safeguarding projects and communities from malicious exploits and
            financial losses.
          </p>
          <button className="bg-gradient-to-r from-[#7a38fe] to-[#3eb1fc] text-white px-8 py-3 rounded-full text-lg hover:opacity-90 flex items-center">
            Get Started
            <span className="ml-2">➔</span>
          </button>
          <div className="flex mt-12 space-x-12">
            <div>
              <div className="text-4xl font-bold text-white">2000+</div>
              <div className="text-sm text-gray-400">Protected Contracts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">3+ Billion</div>
              <div className="text-sm text-gray-400">Scanned Transactions</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2  ">
          <img
            src={shield}
            alt="Web3 Security"
            className="w-full max-w-lg mx-auto h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
