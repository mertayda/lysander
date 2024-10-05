import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = [
  { name: "Lysander Prodtocol", href: "/" },
  { name: "Aegls", href: "/aegls" },
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Developers", href: "/developers" },
  { name: "Blog", href: "/blog" },
];

const Navigation = () => {
  return (
    <nav className=" text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src={logo} className="h-8 w-auto" alt="Lossless logo" />
          </div>
          <div className="hidden md:block flex-grow">
            <div className="flex justify-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <button className="bg-blueViolet text-white px-4 py-2 rounded-full hover:bg-purple-700 flex items-center">
              Contact us
              <span className="ml-2">➔</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
