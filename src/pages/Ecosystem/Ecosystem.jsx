import React, { useState, useEffect, useCallback } from "react";
import {
  Shield,
  Lock,
  Eye,
  Key,
  Cpu,
  Network,
  Zap,
  Users,
  FileCheck,
  AlertTriangle,
  X,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const FuturisticIcon = ({ icon: Icon, isActive, pulse }) => (
  <div
    className={`relative w-12 h-12 md:w-16 md:h-16 ${
      isActive ? "scale-110" : "scale-100"
    } transition-all duration-300`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full opacity-20 ${
        pulse ? "animate-ping" : "animate-pulse"
      }`}
    ></div>
    <Icon
      className={`w-full h-full text-white ${
        isActive ? "drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]" : ""
      }`}
    />
  </div>
);

const EcosystemNode = ({
  icon,
  title,
  description,
  x,
  y,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer transition-all duration-300 ${
        isActive ? "scale-110 z-10" : "scale-100 z-0"
      }`}
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <FuturisticIcon icon={icon} isActive={isActive} pulse={isActive} />
      <div
        className={`mt-2 text-center transition-all duration-300 ${
          isActive ? "scale-105" : "scale-100"
        }`}
      >
        <h3 className="text-sm md:text-lg font-bold text-white mb-1">
          {title}
        </h3>
        <p
          className={`text-xs text-cyan-300 max-w-[150px] transition-all duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {description}
        </p>
      </div>
    </button>
  );
};

const MinimalDetailPanel = ({ item, onClose }) => (
  <div className="fixed inset-0 md:inset-auto md:right-0 md:top-0 md:bottom-0 w-full md:w-80 bg-gray-900 bg-opacity-80 p-6 overflow-y-auto transform transition-all duration-300 shadow-lg backdrop-blur-md z-50">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
    >
      <X className="h-6 w-6" />
    </button>
    <div className="mb-6">
      <FuturisticIcon icon={item.icon} isActive={true} />
    </div>
    <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
    <p className="text-gray-300 text-sm mb-6">{item.description}</p>
    <div className="space-y-2">
      {item.features.map((feature, index) => (
        <div key={index} className="flex items-center text-cyan-300">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
          <span className="text-sm">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const Ecosystem = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState(null);
  const [showLines, setShowLines] = useState(false);
  const [showMainPage, setShowMainPage] = useState(true);

  const handleMouseMove = useCallback((event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const timer = setTimeout(() => setShowLines(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const ecosystemItems = [
    {
      icon: Shield,
      title: "Threat Detection",
      description: "AI-driven real-time security",
      x: 50,
      y: 20,
      features: [
        "Machine learning algorithms",
        "Behavioral analysis",
        "Automated threat response",
      ],
    },
    {
      icon: Lock,
      title: "Quantum Encryption",
      description: "Future-proof data protection",
      x: 20,
      y: 40,
      features: [
        "Post-quantum cryptography",
        "Key distribution",
        "Long-term security assurance",
      ],
    },
    {
      icon: Eye,
      title: "Privacy Computations",
      description: "Secure data operations",
      x: 80,
      y: 40,
      features: [
        "Homomorphic encryption",
        "Zero-knowledge proofs",
        "Secure multi-party computation",
      ],
    },
    {
      icon: Key,
      title: "Identity Management",
      description: "Decentralized user control",
      x: 35,
      y: 70,
      features: [
        "Self-sovereign identity",
        "Biometric authentication",
        "Credential verification",
      ],
    },
    {
      icon: Cpu,
      title: "Smart Contract Audit",
      description: "Automated security checks",
      x: 65,
      y: 70,
      features: [
        "Static code analysis",
        "Symbolic execution",
        "Formal verification",
      ],
    },
    {
      icon: Network,
      title: "Interoperability",
      description: "Seamless cross-chain action",
      x: 50,
      y: 90,
      features: [
        "Cross-chain communication",
        "Asset bridging",
        "Universal protocol standards",
      ],
    },
  ];

  const handleNodeClick = useCallback((index) => {
    setActiveNode((prevActiveNode) =>
      prevActiveNode === index ? null : index
    );
    setShowMainPage(false);
  }, []);

  const handleClosePanel = useCallback(() => {
    setActiveNode(null);
    setShowMainPage(true);
  }, []);

  const handleReturnToMain = useCallback(() => {
    setActiveNode(null);
    setShowMainPage(true);
  }, []);

  return (
    <div className="relative bg-gray-900 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-gray-900"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.2) 0%, transparent 5%, transparent 100%)`,
          pointerEvents: "none",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-center mb-2 animate-pulse">
          Lysander
        </h1>
        <p className="text-lg md:text-xl text-cyan-300 text-center mb-16">
          Web3 Security Protocol of the Future
        </p>
        <div className="relative" style={{ height: "70vh" }}>
          {ecosystemItems.map((item, index) => (
            <EcosystemNode
              key={index}
              {...item}
              isActive={activeNode === index}
              onClick={() => handleNodeClick(index)}
            />
          ))}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: -1 }}
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            {ecosystemItems.map((item, i) =>
              ecosystemItems
                .slice(i + 1)
                .map((otherItem, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={`${item.x}%`}
                    y1={`${item.y}%`}
                    x2={`${otherItem.x}%`}
                    y2={`${otherItem.y}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    opacity={showLines ? "0.3" : "0"}
                    className="transition-opacity duration-1000"
                  />
                ))
            )}
          </svg>
        </div>
      </div>
      {activeNode !== null && (
        <MinimalDetailPanel
          item={ecosystemItems[activeNode]}
          onClose={handleClosePanel}
        />
      )}
      {!showMainPage && (
        <Link
          to="/"
          onClick={handleReturnToMain}
          className="fixed bottom-4 right-4 bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full shadow-lg transition-colors duration-300 z-50"
        >
          <Home className="h-6 w-6" />
        </Link>
      )}
    </div>
  );
};

export default Ecosystem;
