import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/common.css";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="common-container">
      <div className="common-heading">{t("What is SNAIPER?")}</div>
      <div className="common-text">
        {t(
          "SNAIPER SEO CONSOLE is a powerful tool that automates the SEO work creating keywords, metatags and blog articles generating traffic reportsautomated updates directly to web sites at your set frequencies"
        )}
      </div>
    </div>
  );
};

export default About;
