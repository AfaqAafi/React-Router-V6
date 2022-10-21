import React from "react";
import "./HeroImageStyles.css";
const HeroImage = ({ title, text }) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroImage;
