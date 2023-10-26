import React from "react";
import "./Hero.css";

const Hero = () => {
  const handleButtonClick = () => {
    const offset = 790;
    window.scrollBy({
      top: offset,
      behavior: "smooth", 
    });
  };

  return (
    <>
      <div className="hero-content">
        <div className="hero-content-text">
          <h1>
            Real-time
            <br /> <span>Cryptocurrency</span>
            <br /> <span className="span1">All in One Place!</span>
          </h1>
        </div>
        <button className="mobile-btn-hero" onClick={handleButtonClick}>
          Get Started
        </button>
      </div>
    </>
  );
};

export default Hero;
