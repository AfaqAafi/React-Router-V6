import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyles.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="location">
            <FaSearchLocation
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>123 Acme St.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              0346-7790916
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              dmdcode16@gmail.com
            </h4>
          </div>
        </div>
        <div className="footer-right">
          <h4>About the company</h4>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            repellat itaque eius asperiores consequatur illum ratione incidunt
            similique eos non similique eos non?"
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
