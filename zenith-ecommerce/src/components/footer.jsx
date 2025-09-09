import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & Address */}
        <div className="footer-section">
          <img src="/src/assets/logo1.png" alt="Logo" className="footer-logo" />
          <p className="footer-address">
            XXX Company <br />
            1 Street, City, State - 123456 <br />
            Email: info@example.com <br />
            Phone: +91 98765 43210
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom CopyRight */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} XXX Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
