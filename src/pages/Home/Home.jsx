import React from "react";
import HomeHero from "../../components/HomeHero/HomeHero";
import ProtocolProtectionFeatures from "../../components/Production/ProtocolProtectionFeatures";
import Aegis from "../Aegis/Aegis";
import Protocol from "../../components/Protocol/Protocol";
import Community from "../../components/Community/Community";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Protocol></Protocol>
      <ProtocolProtectionFeatures></ProtocolProtectionFeatures>
      <Community></Community>
      <Footer></Footer>
    </div>
  );
};

export default Home;
