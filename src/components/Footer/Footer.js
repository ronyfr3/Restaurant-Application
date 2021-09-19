import React from "react";
import { FaTwitterSquare, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackToTopBtn from "./BackToTop";

const Footer = () => {
  return (
    <div className="footer">
      <BackToTopBtn />
      <div className="footerImage_wrapper">
        <div className="akuygaks">
          <img src="webLogo.png" alt="himalayanlogo" />
          <p>himalayan dine - barrhead</p>
        </div>
        <div className="contact_wrapper">
          <ul>
            <li>Contact us: 01418813870</li>
            <li>232A Main St, Barrhead</li>
          </ul>
        </div>
      </div>

      <div className="footer_wrapper">
        <div className="openClose_wrapper">
          <ul>
            <h2>Opening Hours</h2>
            <li>Monday - Closed</li>
            <li>Tuesday - sunday</li>
            <li>Closed Until 10.00 pm</li>
          </ul>
        </div>
        <div className="navigation_wrapper">
          <h2>navigation</h2>
          <Link to="/home">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="social_wrapper">
          <ul>
            <li>
              <FaFacebook className="fab" />
            </li>
            <li>
              <FaInstagramSquare className="fab" />
            </li>
            <li>
              <FaTwitterSquare className="fab" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
