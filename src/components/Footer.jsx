import React, { useState } from "react";
import "../styles/footer.css";
import Contact from "./Contact";

const Footer = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <footer className="footer relative overflow-hidden" id="footer-section">
      {/* Foreground Content */}
      <div className="relative z-10">
        <div className="footer-header">
          <p className="footer-cta">Get more Information.</p>
          <button
            className="footer-login-button"
            onClick={() => setIsContactVisible(true)}
          >
            Contact Us
          </button>
        </div>

        {isContactVisible && (
          <div className="contact-overlay">
            <Contact onClose={() => setIsContactVisible(false)} />
          </div>
        )}

        {/* <div className="brand-name">SNAIPER CONSOLE</div> */}

        {/* <div className="footer-meta">
          <a href="#" className="footer-meta-link">
            © SNAIPER
          </a>
          <a href="#" className="footer-meta-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-meta-link">
            Terms of Service
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
