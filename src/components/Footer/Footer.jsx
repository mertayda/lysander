import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-pictonBlue to-blueViolet">
          <div className="px-8 py-12 relative z-10">
            <form className="flex">
              <input type="email"></input>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
