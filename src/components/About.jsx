import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img
          src={`${import.meta.env.BASE_URL}assets/${"Blessing.jpg"}`}
          //  src="/assets/Blessing.jpg"
          alt="Profile"
        />

        <div className="info-box">
          <div className="text">
            <h3>Hi, i'm</h3>
            <h1>Blessing Odinaka</h1>
            <span>Data Analyst</span>
          </div>{" "}
          <div className="btn-group">
            {/* <div className="btn">Download CV</div> */}
            <div className="btn">
              <a href="#contact">Contact</a>{" "}
            </div>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/blessing-a-odinaka-221835234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <FaLinkedinIn className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
