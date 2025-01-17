import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/about">About Us</a>
          <a href="/service">Services</a>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Phone: +91 9673188352</p>
          <p>Email: sunenergysystems74@gmail.com</p>
          <p>
            Location: MIDC Hingna road,Near Electronic Zone Square, Nagpur,
            Maharashtra 440016
          </p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/9b7usXyrmRQYQ9zC/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ritesh7564?utm_source=qr&igsh=MWNrd2FxdWd5em1uYw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="mailto:sunenergysystems74@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} Sun Energy Systems. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
