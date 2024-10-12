import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Cpu,
  Network,
  Zap,
  Eye,
  ChevronDown,
  Home,
  ArrowRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LysanderSecurity = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);

      const sections = ["fortify", "capabilities", "team", "metrics"];
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
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
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

      <header className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-lg z-40">
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 px-4">
          <div className="text-2xl font-bold text-blueViolet">Lysander</div>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Link>
            {["Fortify", "Capabilities", "Team", "Metrics"].map((item) => (
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
            <ChevronDown
              className={`w-6 h-6 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 py-2">
          <Link
            to="/"
            className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-slate-800 flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Link>
          {["Fortify", "Capabilities", "Team", "Metrics"].map((item) => (
            <button
              key={item}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-slate-800"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-16">
        <section id="fortify" className="text-center mb-24 relative">
          <Shield className="w-96 h-96 text-blueViolet opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blueViolet to-pictonBlue">
              Lysander Security:
            </span>{" "}
            Fortifying Web3
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pioneering advanced security solutions for the decentralized era
          </p>
          <button className="bg-gradient-to-r from-blueViolet to-pictonBlue text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-blueViolet/50 transition duration-300 flex items-center justify-center mx-auto">
            Fortify Your Digital Assets
            <Shield className="ml-2 h-5 w-5" />
          </button>
        </section>

        <section id="capabilities" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Cutting-Edge Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={index} {...capability} />
            ))}
          </div>
        </section>

        <section id="team" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Vanguard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>

        <section id="metrics" className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Security Metrics Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Elevate Your Blockchain Security?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the forefront of Web3 security with Lysander's cutting-edge
            solutions.
          </p>
          <button className="bg-gradient-to-r from-blueViolet to-pictonBlue text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-blueViolet/50 transition duration-300 flex items-center justify-center mx-auto">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </section>
      </main>
    </div>
  );
};

const CapabilityCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 group">
    <Icon className="h-8 w-8 text-blueViolet group-hover:text-pictonBlue transition-colors duration-300 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
      {description}
    </p>
  </div>
);

const TeamMember = ({ name, role, specialty, achievement }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-sm text-blueViolet mb-4">{role}</p>
    <p className="text-sm text-gray-400 mb-4">{specialty}</p>
    <p className="text-sm italic text-gray-500">Achievement: {achievement}</p>
  </div>
);

const MetricCard = ({ title, value, change, chartData }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="flex items-end mb-4">
      <span className="text-3xl font-bold text-blueViolet">{value}</span>
      <span
        className={`ml-2 ${
          change.startsWith("+") ? "text-green-500" : "text-red-500"
        }`}
      >
        {change}
      </span>
    </div>
    <div className="h-32">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1a1a1a", border: "none" }}
            itemStyle={{ color: "#ddd" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const capabilities = [
  {
    icon: Shield,
    title: "Quantum-Resistant Protocols",
    description:
      "Future-proofing blockchain security with post-quantum cryptographic solutions.",
  },
  {
    icon: Cpu,
    title: "AI-Enhanced Threat Matrix",
    description:
      "Real-time threat detection and response powered by advanced machine learning algorithms.",
  },
  {
    icon: Network,
    title: "Cross-Chain Security Fabric",
    description:
      "Unified security framework ensuring consistent protection across multiple blockchain networks.",
  },
  {
    icon: Lock,
    title: "Zero-Knowledge Identity",
    description:
      "Privacy-preserving authentication and authorization systems for Web3 applications.",
  },
  {
    icon: Zap,
    title: "Smart Contract Formal Verification",
    description:
      "Mathematically proving the correctness and security of smart contracts before deployment.",
  },
  {
    icon: Eye,
    title: "Predictive Threat Modeling",
    description:
      "Anticipating and mitigating potential security risks before they materialize.",
  },
];

const teamMembers = [
  {
    name: "Dr. Elara Voss",
    role: "Quantum Cryptography Lead",
    specialty: "Pioneering post-quantum encryption algorithms",
    achievement:
      "Developed a novel lattice-based cryptosystem with 40% improved efficiency.",
  },
  {
    name: "Zephyr Kojima",
    role: "AI Security Architect",
    specialty: "Designing AI-powered threat detection systems",
    achievement:
      "Created an AI model that reduced false positives in anomaly detection by 75%.",
  },
  {
    name: "Aria Nightingale",
    role: "Zero-Knowledge Proof Engineer",
    specialty: "Implementing privacy-preserving protocols",
    achievement:
      "Optimized zk-SNARK proving time, reducing it by 60% for complex statements.",
  },
  {
    name: "Cyrus Xander",
    role: "Distributed Systems Specialist",
    specialty: "Ensuring robustness of decentralized networks",
    achievement:
      "Prevented a potential $200M exploit in a major DeFi protocol.",
  },
];

const metrics = [
  {
    title: "Threats Neutralized",
    value: "10,562",
    change: "+23%",
    chartData: [
      { name: "Jan", value: 7500 },
      { name: "Feb", value: 8200 },
      { name: "Mar", value: 9000 },
      { name: "Apr", value: 9800 },
      { name: "May", value: 10562 },
    ],
  },
  {
    title: "Quantum Resistance Score",
    value: "98.7%",
    change: "+5.2%",
    chartData: [
      { name: "Jan", value: 92 },
      { name: "Feb", value: 94 },
      { name: "Mar", value: 95.5 },
      { name: "Apr", value: 97.2 },
      { name: "May", value: 98.7 },
    ],
  },
  {
    title: "Cross-Chain Transactions Secured",
    value: "1.2M",
    change: "+45%",
    chartData: [
      { name: "Jan", value: 600000 },
      { name: "Feb", value: 750000 },
      { name: "Mar", value: 900000 },
      { name: "Apr", value: 1050000 },
      { name: "May", value: 1200000 },
    ],
  },
  {
    title: "AI Detection Accuracy",
    value: "99.99%",
    change: "+0.7%",
    chartData: [
      { name: "Jan", value: 99.2 },
      { name: "Feb", value: 99.5 },
      { name: "Mar", value: 99.7 },
      { name: "Apr", value: 99.8 },
      { name: "May", value: 99.99 },
    ],
  },
];

export default LysanderSecurity;
