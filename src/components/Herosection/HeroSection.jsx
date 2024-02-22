import React from "react";
import "./herosection.css";
import heroImage from "../../assets/generativeAI.png";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Blue Tick Consultants</h1>
        <p>
          Founded in 2017, Bluetick Consultants is a technology-driven firm that
          has made a significant impact in the Indian and US startup ecosystems.
          Transforming Enterprises with cutting-edge, scalable, privacy-focused
          Generative AI Solutions
        </p>
        <button href="https://www.bluetickconsultants.com/generative-ai.html">
          To Know more about us
        </button>
      </div>
      <div className="hero-image">
        <img src={heroImage}/>
      </div>
    </div>
  );
}

export default HeroSection;
