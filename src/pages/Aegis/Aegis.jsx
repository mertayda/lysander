import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  AlertCircle,
  Zap,
  Globe,
  Code,
  ChevronDown,
  ArrowRight,
  Home,
} from "lucide-react";
import Footer from "../../components/Footer/Footer";

const Aegis = () => {
  const [activeSection, setActiveSection] = useState("aegis");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);

      const sections = ["aegis", "services", "features", "faq"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blueViolet to-pictonBlue z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        ref={headerRef}
        className="py-4 px-4 sm:px-6 lg:px-8 sticky top-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg z-40 transition-all duration-300"
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-blueViolet">Lysander</div>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Link>
            {["Aegis", "Services", "Features", "FAQ"].map((item) => (
              <button
                key={item}
                className={`text-gray-300 hover:text-white transition ${
                  activeSection === item.toLowerCase()
                    ? "border-b-2 border-blueViolet"
                    : ""
                }`}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30">
          <div className="fixed right-0 top-0 h-full w-64 bg-slate-900 p-4">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-4 mt-12">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5 mr-2" />
                Return to Home
              </Link>
              {["Home", "Services", "Features", "FAQ"].map((item) => (
                <button
                  key={item}
                  className={`text-gray-300 hover:text-white transition ${
                    activeSection === item.toLowerCase()
                      ? "border-l-4 border-blueViolet pl-2"
                      : ""
                  }`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <section id="aegis" className="text-center mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Shield className="w-96 h-96 text-blueViolet animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blueViolet to-pictonBlue animate-gradient-x">
              Aegis:
            </span>{" "}
            Fortifying the Future of Web3
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Lysander's cutting-edge security protocol for the decentralized era
          </p>
          <button className="bg-gradient-to-r from-blueViolet to-pictonBlue text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-blueViolet/50 transition duration-300 ease-in-out flex items-center justify-center mx-auto group">
            Secure Your Digital Frontier
            <Shield className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </button>
        </section>

        <section id="services" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        <section id="features" className="mb-24 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Lysander?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <section id="faq" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Secure Your Web3 Future?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the ranks of forward-thinking projects that trust Lysander to
            safeguard their digital assets.
          </p>
          <button className="bg-gradient-to-r from-blueViolet to-pictonBlue text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-blueViolet/50 transition duration-300 ease-in-out flex items-center justify-center mx-auto group">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group">
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-blueViolet group-hover:text-pictonBlue transition-colors duration-300" />
      <h3 className="text-xl font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
      {description}
    </p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors duration-300">
    <Icon className="h-12 w-12 text-blueViolet mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left hover:bg-slate-900 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400 animate-fadeIn">{answer}</div>
      )}
    </div>
  );
};

const services = [
  {
    icon: Lock,
    title: "Quantum-Resistant Encryption",
    description:
      "Future-proof your assets with our advanced cryptographic algorithms designed to withstand quantum computing threats.",
  },
  {
    icon: AlertCircle,
    title: "AI-Powered Threat Detection",
    description:
      "Harness the power of artificial intelligence to predict and neutralize emerging security risks in real-time.",
  },
  {
    icon: Shield,
    title: "Decentralized Identity Protection",
    description:
      "Safeguard user identities across the multiverse of blockchains with our innovative zero-knowledge proof systems.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Incident Response",
    description:
      "Our automated mitigation protocols deploy countermeasures at the speed of light, minimizing potential damage from attacks.",
  },
  {
    icon: Globe,
    title: "Cross-Chain Security Mesh",
    description:
      "Unify your multi-blockchain infrastructure under a single, impenetrable security umbrella that adapts to new protocols.",
  },
  {
    icon: Code,
    title: "Smart Contract Fortification",
    description:
      "Elevate your DApps with our advanced auditing tools and formal verification techniques, ensuring iron-clad smart contract integrity.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Unparalleled Security",
    description:
      "Our multi-layered approach ensures the highest level of protection for your digital assets.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description:
      "Experience seamless security that doesn't compromise on speed or efficiency.",
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description:
      "Our solutions grow with you, supporting projects of any size across the entire blockchain ecosystem.",
  },
];

const faqs = [
  {
    question:
      "What makes Lysander's Aegis different from other security solutions?",
    answer:
      "Aegis combines cutting-edge technologies like quantum-resistant encryption and AI-powered threat detection with a deep understanding of the Web3 landscape. Our holistic approach to security covers everything from smart contract audits to real-time monitoring, providing unparalleled protection for your blockchain projects.",
  },
  {
    question:
      "How does Lysander ensure the security of cross-chain transactions?",
    answer:
      "Our Cross-Chain Security Mesh creates a unified security layer that spans multiple blockchains. This innovative approach allows us to monitor and protect assets as they move between different chains, ensuring consistent security standards across the entire transaction lifecycle.",
  },
  {
    question:
      "Can Lysander's solutions be integrated with existing blockchain infrastructure?",
    answer:
      "Absolutely! Aegis is designed to be highly flexible and compatible with a wide range of blockchain protocols and existing infrastructure. Our team works closely with clients to ensure seamless integration, minimizing disruption to your operations while maximizing security benefits.",
  },
];

export default Aegis;
