import React from "react";
import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";
import "./Training.styles.css";
import { Link } from "react-router-dom";
const Training = () => {
  return (
    <>
      <div className="training">
        <div className="left">
          <h1>Training</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            earum asperiores, laudantium eum quidem consequuntur et sequi veniam
            quia harum architecto voluptatibus nisi, beatae deserunt.
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={Moon} alt="" className="img" />
            </div>
            <div className="img-stack bottom">
              <img src={Pod} alt="" className="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
