import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/common.css";

const Use = () => {
  const { t } = useTranslation();
  return (
    <div className="common-container">
      <div className="common-heading">{t("Internal or external use")}</div>
      <div className="common-text">
        <span>
          {t(
            "Use SNAIPER to create and distribute traffic reports to all clients. automated at set frequencies"
          )}
        </span>
        <span>{"or"}</span>
        <span>
          {t(
            "Provide SNAIPERS to make your clients SEO winners with increased traffic and higher rankings. guaranteed"
          )}
        </span>
      </div>
    </div>
  );
};

export default Use;
