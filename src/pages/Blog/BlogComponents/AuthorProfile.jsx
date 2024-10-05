import React from "react";

const AuthorProfile = ({ author }) => {
  return (
    <div className="flex items-center bg-gray-800 rounded-lg p-6 mt-8">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-20 h-20 rounded-full mr-6"
      />
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{author.name}</h3>
        <p className="text-gray-300 mb-3">{author.bio}</p>
        <div className="flex space-x-4">
          {author.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
