import React from "react";
import { useTranslation } from "react-i18next";

import "../styles/common.css";

const Money = () => {
  const { t } = useTranslation();
  return (
    <div className=" common-container">
      <div className="common-heading">{t("Lets make Money together")}</div>
      <div className="common-text">
        {t(
          "SNAIPERs unique split profit model brings increased revenue, and cuts man hours related to SEO work. Trust the worlds most powerful AI technology to get more satisfied clients and gain profit."
        )}
      </div>
    </div>
  );
};

export default Money;
