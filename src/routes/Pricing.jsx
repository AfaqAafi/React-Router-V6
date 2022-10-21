import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HeroImage from "../component/HeroImage";
import PricingCard from "../component/PricingCard";
const Pricing = () => {
  return (
    <>
      <Navbar />
      <HeroImage text="Choose Your Trip!" title="Pricing" />
      <PricingCard />
      <Footer />
    </>
  );
};

export default Pricing;
