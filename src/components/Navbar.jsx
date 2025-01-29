import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">Snaiper</div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#" className="navbar-link">
          Developers & Community
        </a>
        <a href="#" className="navbar-link">
          Creators
        </a>
        <a
          href="#"
          className="navbar-link"
          onClick={() => scrollToSection("brand-work-section")}
        >
          About Us
        </a>
        <a
          href="#footer"
          className="navbar-link"
          onClick={() => scrollToSection("footer-section")}
        >
          Contact
        </a>
        <a href="#" className="navbar-link">
          Blog
        </a>
      </div>

      {isAuthenticated ? (
        <button className="navbar-login-button" onClick={(e) => logout()}>
          Log Out
        </button>
      ) : (
        <button
          className="navbar-login-button"
          onClick={(e) => loginWithRedirect()}
        >
          Login
        </button>
      )}

      <button className="navbar-burger" onClick={toggleMenu}>
        <span className="navbar-burger-line"></span>
        <span className="navbar-burger-line"></span>
        <span className="navbar-burger-line"></span>
      </button>
    </nav>
  );
};

export default Navbar;
