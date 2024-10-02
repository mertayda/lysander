import React, { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Shield,
  Zap,
  Network,
} from "lucide-react";

const slides = [
  {
    title: "Unbreakable Web3",
    subtitle: "Transaction Security",
    description:
      "Lysander protocol revolutionizes blockchain security with advanced cryptographic techniques. Our cutting-edge solution ensures tamper-proof transactions, protecting your assets from sophisticated cyber threats in the decentralized ecosystem.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Quantum-Resistant",
    subtitle: "Encryption",
    description:
      "Future-proof your Web3 transactions with Lysander's quantum-resistant encryption. Our protocol is designed to withstand attacks from both classical and quantum computers, ensuring long-term security for your blockchain operations.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-400 to-cyan-500",
  },
  {
    title: "Decentralized",
    subtitle: "Transaction Validation",
    description:
      "Lysander leverages a network of decentralized validators to ensure transaction integrity. This distributed approach eliminates single points of failure and enhances the overall security and reliability of your Web3 protocol interactions.",
    icon: <Network className="w-8 h-8" />,
    color: "from-pink-500 to-orange-400",
  },
];

const TechCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black"></div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
            <div
              className={`mb-8 p-4 rounded-full bg-gradient-to-br ${slide.color}`}
            >
              {slide.icon}
            </div>
            <h2 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.color}`}
              >
                {slide.title}
              </span>{" "}
              <span className="text-white">{slide.subtitle}</span>
            </h2>
            <p className="mb-8 text-lg sm:text-xl lg:text-2xl text-gray-300">
              {slide.description}
            </p>
            <button
              className={`px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r ${slide.color} rounded-full hover:shadow-lg hover:shadow-white/10 transition duration-300 transform hover:scale-105`}
            >
              Secure Your Web3
            </button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition duration-300"
      >
        <ChevronLeftIcon size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition duration-300"
      >
        <ChevronRightIcon size={24} />
      </button>
    </div>
  );
};

export default TechCarousel;
