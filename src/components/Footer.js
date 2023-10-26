import React from "react";
import { FaTwitter, FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa";
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
          <p>#Stay Connected</p>
          <p className="acc">Follow Us on Social Media</p>

          <div className="social-icons">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>

            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="icon" />
            </a>

            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>

            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon" />
            </a>
          </div>
        </footer>

        <div className="footer-links">
          <p>About Us</p>
          <p>Services</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="right-circle">
        <img src={bitcoinIMG2} alt="Bitcoin" />
      </div>
    </div>
  );
};

export default Footer;
