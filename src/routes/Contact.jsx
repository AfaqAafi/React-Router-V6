import React from "react";
import Footer from "../component/Footer";
import HeroImage from "../component/HeroImage";
import Navbar from "../component/Navbar";
import Form from "../component/Form";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImage text="CONTACT" title="Contact GLX Travel" />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
