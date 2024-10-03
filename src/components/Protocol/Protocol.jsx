import React from "react";
import cards from "../../assets/cards.png";

const Protocol = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-slate-900">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16 relative">
        <div className="w-full lg:w-1/2 text-left z-10">
          <div className="mb-8">
            <div className="w-16 h-16 border border-pictonBlue rounded-md flex items-center justify-center">
              <div className="w-12 h-12 bg-pictonBlue opacity-80"></div>
            </div>
          </div>
          <h1 className="text-5xl  mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blueViolet to-pictonBlue leading-tight">
            Lysander Protocol
          </h1>
          <p className="text-xl mb-6 text-cadetBlue font-light">
            Industry's first framework for active exploit mitigation.
          </p>
          <p className="mb-8 text-cadetBlue leading-relaxed">
            Lysander platform facilitates manual and automatic community-driven
            monitoring of suspicious on-chain activity. Malicious token
            transactions are frozen after being flagged and are subject to
            further investigation.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-3 rounded-md transition duration-300 text-white bg-blueViolet hover:bg-pictonBlue font-medium">
              Explore Platform
            </button>
            <button className="px-8 py-3 rounded-md transition duration-300 bg-transparent text-pictonBlue border border-pictonBlue hover:bg-pictonBlue hover:text-charCoal font-medium">
              Token Minter
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-md md:mt-12">
            <img
              src={cards}
              alt="Protocol illustration"
              className="w-full h-auto relative z-10 rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protocol;
