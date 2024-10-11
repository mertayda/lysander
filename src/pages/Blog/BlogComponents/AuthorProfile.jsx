import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const socialIcons = {
  Facebook: Facebook,
  Twitter: Twitter,
  LinkedIn: Linkedin,
  GitHub: Github,
};

const AuthorProfile = ({ writers }) => {
  if (!writers) {
    return <div className="text-white">No author data available</div>;
  }

  return (
    <div className="flex items-center bg-gray-800 rounded-lg p-6 mt-8">
      <img
        src={writers.avatar}
        alt={writers.name}
        className="w-20 h-20 rounded-full mr-6"
      />
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{writers.name}</h3>
        <p className="text-gray-300 mb-3">{writers.bio}</p>
        {writers.socialLinks && writers.socialLinks.length > 0 && (
          <div className="flex space-x-4">
            {writers.socialLinks.map((link) => {
              const Icon = socialIcons[link.platform] || socialIcons.GitHub;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorProfile;
