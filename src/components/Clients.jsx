import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/common.css";

const Clients = () => {
  const { t } = useTranslation();

  return (
    <div className="common-container">
      <div className="common-heading">{t("Happier clients for less work")}</div>
      <div className=" common-text">
        <span>
          {t(
            "SNAIPER delivers improved SEO content to your clients web page willget more traffic and climb on rankings."
          )}
        </span>
        <span>
          {t(
            "This is done by probably the most versatile and powerful SEO CONSOLEever made."
          )}
        </span>
        <span>{t("Drop the boring work as SEO improvements is.")}</span>
        <span>{t("Let SNAIPER do it for you. Fully automated")}</span>
      </div>
    </div>
  );
};

export default Clients;
