import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import "../styles/navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Destructure useTranslation hook
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false); // Define menuOpen state here
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
  const handleLanguageChange = (language, languageCode) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(languageCode); // Change language in i18next with language code
    console.log(`Language changed to: ${language}`);
    console.log(`Current language: ${i18n.language}`); // Log the current language
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">{t("SNAIPER")}</div>

      {/* Language Dropdown */}
      <div className="language-dropdown">
        <button className="language-button">{selectedLanguage}</button>
        <div className="language-menu">
          <button
            className="language-item"
            onClick={() => handleLanguageChange("English", "en")}
          >
            English
          </button>
          <button
            className="language-item"
            onClick={() => handleLanguageChange("Spanish", "es")}
          >
            Spanish
          </button>
          <button
            className="language-item"
            onClick={() => handleLanguageChange("French", "fr")}
          >
            French
          </button>
          <button
            className="language-item"
            onClick={() => handleLanguageChange("German", "de")}
          >
            German
          </button>
          <button
            className="language-item"
            onClick={() => handleLanguageChange("Scandinavian", "scandinavian")}
          >
            Scandinavian
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
    </nav>
  );
};

export default Navbar;
