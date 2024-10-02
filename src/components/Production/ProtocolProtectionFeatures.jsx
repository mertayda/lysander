import React from "react";
import {
  AlertCircle,
  Clock,
  Shield,
  RotateCw,
  Lock,
  Zap,
  Eye,
  Cpu,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="relative bg-gradient-to-br from-[#0a0b2e] to-[#1a0b4b] p-6 rounded-lg border border-[#3eb1fc] shadow-lg overflow-hidden group transition-all duration-300 hover:scale-105">
    <div className="absolute inset-0 bg-gradient-to-r from-[#3eb1fc] to-[#7a38fe] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <div className="absolute top-0 left-0 w-2 h-2 bg-[#3eb1fc] rounded-full shadow-[0_0_10px_#3eb1fc]"></div>
    <div className="absolute top-0 right-0 w-2 h-2 bg-[#7a38fe] rounded-full shadow-[0_0_10px_#7a38fe]"></div>
    <div className="relative z-10">
      <div className="bg-[#1a1f3d] p-4 rounded-full mb-4 inline-block">
        <Icon className="w-8 h-8 text-[#3eb1fc]" />
      </div>
      <h3 className="text-[#3eb1fc] text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-[#3eb1fc] opacity-50 blur-lg rounded-full"></div>
  </div>
);

const ProtocolProtectionFeatures = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0b2e] to-[#1a0b4b] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-dmSans">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzBhMGIyZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDYwIDYwWk02MCAwTDAgNjBaIiBzdHJva2U9IiMxYTBiNGIiIHN0cm9rZS13aWR0aD0iMC41Ij48L3BhdGg+Cjwvc3ZnPg==')]"
          style={{ opacity: 0.1 }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3eb1fc] to-[#7a38fe] mb-6 inline-block">
            Quantum-Level Protection for Your Protocol
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Harness the power of advanced blockchain security with Lysander
            Protocol. Our cutting-edge technology ensures unparalleled
            protection for your digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={AlertCircle}
            title="AI-Powered Exploit Detection"
            description="Utilize machine learning algorithms to predict and prevent potential vulnerabilities before they occur."
          />
          <FeatureCard
            icon={Clock}
            title="Quantum-Speed Transaction Freeze"
            description="Leverage quantum computing principles for instantaneous transaction halting upon detecting suspicious activity."
          />
          <FeatureCard
            icon={Shield}
            title="Blockchain Forensics"
            description="Implement advanced blockchain analysis tools for thorough investigation and resolution of security incidents."
          />
          <FeatureCard
            icon={RotateCw}
            title="Automated Asset Recovery"
            description="Deploy smart contract-based recovery mechanisms to automatically retrieve compromised funds."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Lock}
            title="Multi-Dimensional Encryption"
            description="Secure your assets with state-of-the-art encryption algorithms that operate across multiple blockchain dimensions."
          />
          <FeatureCard
            icon={Zap}
            title="Lightning-Fast Threat Response"
            description="React to potential threats at the speed of light with our advanced early warning system and automated countermeasures."
          />
          <FeatureCard
            icon={Eye}
            title="Holographic Network Monitoring"
            description="Visualize your entire network in real-time with our 3D holographic interface, allowing for intuitive threat detection."
          />
          <FeatureCard
            icon={Cpu}
            title="Quantum Resilient Infrastructure"
            description="Future-proof your protocol with our quantum-resistant architecture, designed to withstand next-gen cyber attacks."
          />
        </div>

        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#3eb1fc] to-[#7a38fe] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Activate Quantum Shield
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3eb1fc] to-[#7a38fe]"></div>
    </div>
  );
};

export default ProtocolProtectionFeatures;
