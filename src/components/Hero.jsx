import React from "react";
import { useTranslation } from "react-i18next";

import "../styles/hero.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <div className="hero-header">
        <div className="hero-title">
          <span>{t("THE")}</span>
          <span>{t("SNAIPER")}</span>
          <span>{t("SEO CONSOLE")}</span>
          <p>{t("Made for and used by MEDIA AGENCIES worldwide.")}</p>
        </div>
      </div>

      <div className="hero-features">
        <span className="hero-title-text">{t("Released Time.")}</span>
        <span className="hero-title-text">{t("Increased Revenue.")}</span>
        <span className="hero-title-text">{t("Happier Clients.")}</span>
      </div>

      <div className="hero-ai">
        <p>{t("Powered by WatsonX - Google - OpenAI.")}</p>
      </div>
    </div>
  );
};

export default Hero;
