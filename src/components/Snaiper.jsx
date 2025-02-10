import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/snaiper.css";

const Snaiper = () => {
  const { t } = useTranslation();

  return (
    <div className="snaiper-container">
      <span>{t("The")}</span>
      <span>{t("SNAIPER")}</span>
      <span>{t("SEO Console")}</span>
      <span>{t("& the triple win")}</span>
    </div>
  );
};

export default Snaiper;
