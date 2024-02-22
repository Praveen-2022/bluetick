import React from "react";
import "./footer.css";
import Logo from "../../assets/bluetick-consultants.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={Logo} alt="Company Logo" />

        <p className="footer-company-name">Blue Tick Consultant © 2024</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+91- 9876543210</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:contact@bluetickconsultants.com">
              contact@bluetickconsultants.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Founded in 2017, Bluetick Consultants is a technology-driven firm that
          has made a significant impact in the Indian and US startup ecosystems.
        </p>

        <div className="footer-icons">
          <a href="#">
            <FaSquareFacebook />
          </a>
          <a href="#">
            <FaSquareXTwitter />
          </a>
          <a href="#">
            <BsLinkedin />
          </a>
          <a href="#">
            <IoLogoGithub />
            {/* <i className="fa fa-github"></i> */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
