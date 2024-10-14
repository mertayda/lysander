import React, { useState } from "react";
import {
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  MessageSquare,
} from "lucide-react";
import logo from "../../assets/Logo.png";

const senctions = [
  {
    title: "Solutions",
    items: [
      "Transaction Shield",
      "Smart Contract Audits",
      "Quantum-Resistant Encryption",
      "Decentralized Validation",
    ],
  },
  {
    title: "Resources",
    items: ["Whitepaper", "API Documentation", "Security Blog", "GitHub"],
  },
  {
    title: "Company",
    items: ["About Us", "Our Technology", "Partners", "Careers", "Contact"],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20 pb-10 font-dmSans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl">
          <div className="px-8 py-12 relative z-10 backdrop-blur-sm bg-black bg-opacity-30">
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Ahead in Web3 Security
            </h2>
            <p className="text-gray-200 mb-6">
              Join Lysander's newsletter for cutting-edge insights and updates.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow bg-white bg-opacity-10 text-white placeholder-gray-300 px-6 py-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-4 rounded-full -ml-12 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              >
                <ArrowRight size={24} />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src={logo} alt="Lysander" className="h-10 w-auto mb-6" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Lysander leads the charge in Web3 security, delivering
              state-of-the-art protocol transaction security solutions. Our
              innovative approach merges advanced cryptography with
              decentralized validation, ensuring unmatched protection for
              blockchain ecosystems.
            </p>
          </div>

          {senctions.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {[
              { icon: <Twitter size={20} />, name: "Twitter" },
              { icon: <Linkedin size={20} />, name: "LinkedIn" },
              { icon: <Github size={20} />, name: "GitHub" },
              { icon: <MessageSquare size={20} />, name: "Telegram" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-gray-400 hover:text-blue-400 transition duration-300">
            <a href="mailto:contact@lysander.io">contact@lysander.io</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
