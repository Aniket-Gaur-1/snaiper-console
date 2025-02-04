import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import "../styles/footer.css";
import Contact from "./Contact";

const Footer = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check if WebGL is supported in the browser
    const checkWebGLSupport = () => {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      return !!gl;
    };

    // Update WebGL support status
    setWebGLSupported(checkWebGLSupport());
  }, []);

  return (
    <footer className="footer relative overflow-hidden" id="footer-section">
      {webGLSupported ? (
        <div className="canvas-container">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      ) : (
        <div className="no-webgl-message">
          <p>
            Your browser does not support WebGL. Some visual elements might not
            work as intended.
          </p>
        </div>
      )}

      {/* Foreground Content */}
      <div className="relative z-10">
        <div className="footer-header">
          <p className="footer-cta">Join the network today.</p>
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
      </div>
    </footer>
  );
};

export default Footer;
