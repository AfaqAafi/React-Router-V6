import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);

  const openNav = () => setNav(!nav);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>GLX TRVL</h1>
      </Link>
      <ul className={nav ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={openNav}>
        {nav ? (
          <FaTimes size={30} style={{ color: "fff" }} />
        ) : (
          <FaBars size={30} style={{ color: "fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
