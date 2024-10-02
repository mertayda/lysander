import React from "react";
import cards from "../../assets/cards.png";
import TechCarousel from "../../ui/Carousel/TechCarousel";

const colors = {
  blueViolet: "#7a38fe",
  pictonBlue: "#3eb1fc",
  cadetBlue: "#aeb1c0",
  charCoal: "#333b54",
  richBlack: "#070b24",
};

const Protocol = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-richBlack to-charCoal">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-pictonBlue opacity-5 blur-3xl"></div>
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <div className="mb-6 flex justify-center md:justify-start">
            <div className="w-16 h-16 border-2 border-pictonBlue rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-blueViolet rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blueViolet to-pictonBlue">
            Lysander Protocol
          </h1>
          <p className="text-xl mb-4 text-pictonBlue font-light">
            Industry's first framework for active exploit mitigation.
          </p>
          <p className="mb-6 text-cadetBlue leading-relaxed">
            Lysander platform facilitates manual and automatic community-driven
            monitoring of suspicious on-chain activity. Malicious token
            transactions are frozen after being flagged and are subject to
            further investigation.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button className="px-8 py-3 rounded-full transition duration-300 text-white bg-gradient-to-r from-blueViolet to-pictonBlue hover:from-pictonBlue hover:to-blueViolet transform hover:scale-105">
              Platform →
            </button>
            <button className="px-8 py-3 rounded-full transition duration-300 bg-charCoal text-pictonBlue border border-pictonBlue hover:bg-pictonBlue hover:text-charCoal transform hover:scale-105">
              Token Minter →
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blueViolet to-pictonBlue opacity-20 rounded-lg blur-md"></div>
            <img
              src={cards}
              alt="Protocol illustration"
              className="w-full h-auto relative z-10 rounded-lg"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-pictonBlue rounded-full animate-ping opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-blueViolet rounded-full animate-ping opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protocol;
