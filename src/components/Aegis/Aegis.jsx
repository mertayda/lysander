import React from "react";
import { Shield, Lock, AlertCircle } from "lucide-react";
import Protocol from "../Protocol/Protocol";

const Aegis = () => {
  return (
    <div className="bg-slate-800 text-white  max-h-screen py-20 font-dmSans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 ">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blueViolet to-pictonBlue ">
                Fortifying
              </span>
              the Future of Web3
            </h1>
            <p className="text-xl  text-gray-300 mb-8">
              Aegis: Your trusted partner in blockchain and smart contract
              security.
            </p>
            <button className="bg-blueViolet text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center">
              Secure your Assets <Shield className="ml-2 h-5 w--"></Shield>
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-slate-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Our Core Services</h2>
              <ul className="space-y-y">
                <li className="flex items-start">
                  <Lock className="mr-3 h-6 w-6 text-blueViolet flex-shrink-0 mt-1"></Lock>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Smart Contract Audits
                    </h3>
                    <p className="text-gray-400">
                      Comprehensive security assessments to identify
                      vulnerabilities in your blockchain applications.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="mr-3 h-6 w-6 text-blueViolet flex-shrink-0"></AlertCircle>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Real-time Threat Monitoring
                    </h3>
                    <p className="text-gray-400">
                      24/7 surveillance of your on-chain infrastructure to
                      detect and prevent potential exploits.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-3 h-6 w-6 text-blueViolet flex-shrink-0"></Shield>
                  <div>
                    <h3 className="font-semibold text-lg">Incident Response</h3>
                    <p className="text-gray-400">
                      Rapid mitigation strategies and expert support in case of
                      security breaches.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aegis;
