import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import bitcoinIMG1 from "../images/bitcoinIMG1.webp";
import bitcoinIMG2 from "../images/bitcoinIMG2.webp";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-circle">
        <img src={bitcoinIMG1} alt="Bitcoin" />
      </div>

      <div className="center-text">
        <footer>
          <p>Track and trade</p>
          <p className="acc"> Digital Currencies with Ease</p>
        </footer>

        <div className="social-icons">
          <FaGithub className="icon" />

          <FaLinkedin className="icon" />
        </div>
      </div>

      <div className="right-circle">
        <img src={bitcoinIMG2} alt="Bitcoin" />
      </div>
    </div>
  );
};

export default Footer;
