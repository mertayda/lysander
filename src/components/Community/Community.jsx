import React from "react";
import { Users, Shield, Zap, Globe } from "lucide-react";

const Community = () => {
  const communityFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Network",
      description:
        "Join a worldwide community of Web3 enthusiasts and security experts.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Collaborative Security",
      description:
        "Participate in security audits and help strengthen the Lysander protocol.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Innovation",
      description:
        "Be at the forefront of blockchain security advancements and contribute to new features.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Decentralized Governance",
      description:
        "Have a say in the future of Lysander through our community-driven decision-making process.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl p-2 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Join Our Thriving Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Become part of a dynamic ecosystem dedicated to shaping the future
            of Web3 security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#join-community"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105"
          >
            Join the Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;
