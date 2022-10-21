import React from "react";
import Footer from "../component/Footer";
import HeroImage from "../component/HeroImage";
import Navbar from "../component/Navbar";
import TrainingComponent from "../component/TrainingComponent";
const Training = () => {
  return (
    <>
      <Navbar />
      <HeroImage text="TRAINING" title="Pre-Flight & In-Flight Training" />
      <TrainingComponent />
      <Footer />
    </>
  );
};

export default Training;
