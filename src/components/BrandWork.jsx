import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/common.css";

const BrandWork = () => {
  const { t } = useTranslation();
  return (
    <div className="common-container">
      <div className="common-heading">{t("How does SNAIPER work?")}</div>
      <div className=" brand-text">
        <span>{t("register client")}</span>
        <span>{t("chose plan")}</span>
        <span>{t("set frequency for future updating of SEO parameters")}</span>
        <span>
          {t("chose type of updates as keywords, metatags, and blog content")}
        </span>
        <span>{t("chose frequency for clients traffic report")}</span>
        <span>{t("click execute")}</span>
        <span>{t("log out")}</span>
      </div>
    </div>
  );
};

export default BrandWork;
