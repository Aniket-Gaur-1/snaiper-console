import React, { useState } from "react";
import "../styles/footer.css";
import Contact from "./Contact"; // Import Contact component

const Footer = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <footer className="footer" id="footer-section">
      <div className="footer-header">
        <p className="footer-cta">Join the network today.</p>
        <button
          className="footer-login-button"
          onClick={() => setIsContactVisible(true)}
        >
          Contact Us
        </button>
      </div>

      {/* Conditionally render the Contact component */}
      {isContactVisible && (
        <div className="contact-overlay">
          <Contact onClose={() => setIsContactVisible(false)} />
        </div>
      )}

      <div className="footer-navigation">
        <a href="#" className="footer-link">
          Developers & Community
        </a>
        <a href="#" className="footer-link">
          Creators
        </a>
        <a href="#" className="footer-link">
          About Us
        </a>
        <a href="#" className="footer-link">
          Contact
        </a>
      </div>
      <div className="brand-name">SNAIPER CONSOLE</div>
      <div className="footer-meta">
        <a href="#" className="footer-meta-link">
          © SNAIPER
        </a>
        <a href="#" className="footer-meta-link">
          Privacy Policy
        </a>
        <a href="#" className="footer-meta-link">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
