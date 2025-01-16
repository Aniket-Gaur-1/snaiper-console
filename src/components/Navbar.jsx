import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

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
        <a href="#" className="navbar-link">
          About Us
        </a>
        <a href="#" className="navbar-link">
          Contact
        </a>
        <a href="#" className="navbar-link">
          Blog
        </a>
        <button className="navbar-login-button">Login</button>
      </div>
      <button className="navbar-burger" onClick={toggleMenu}>
        <span className="navbar-burger-line"></span>
        <span className="navbar-burger-line"></span>
        <span className="navbar-burger-line"></span>
      </button>
    </nav>
  );
};

export default Navbar;
