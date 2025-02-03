import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    console.log(`Language changed to: ${language}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Snaiper</div>

      {/* Language Dropdown */}
      <div className="language-dropdown">
        <button className="language-button">{selectedLanguage}</button>
        <div className="language-menu">
          <button
            className="language-item"
            onClick={() => handleLanguageChange("English")}
          >
            English
          </button>
          <button
            className="language-item"
            onClick={() => handleLanguageChange("Spanish")}
          >
            Spanish
          </button>
          <button
            className="language-item"
            onClick={() => handleLanguageChange("French")}
          >
            French
          </button>
          <button
            className="language-item"
            onClick={() => handleLanguageChange("German")}
          >
            German
          </button>
          <button
            className="language-item"
            onClick={() => handleLanguageChange("Norwegian")}
          >
            Norwegian
          </button>
        </div>
      </div>

      {isAuthenticated ? (
        <button className="navbar-login-button" onClick={() => logout()}>
          Log Out
        </button>
      ) : (
        <button
          className="navbar-login-button"
          onClick={() => loginWithRedirect()}
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
