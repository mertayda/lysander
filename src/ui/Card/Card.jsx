import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      {children}
    </div>
  );
};

export default Card;
