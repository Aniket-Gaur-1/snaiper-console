import React from "react";
import { useTranslation } from "react-i18next";

import "../styles/common.css";

const Created = () => {
  const { t } = useTranslation();

  return (
    <div className="common-container">
      <div className="common-heading">{t("Why we created SNAIPER")}</div>
      <div className="common-text">
        <span>
          {t("Creating, controlling and deploying SEO data takes hours.")}
        </span>
        <span>
          {t(
            "To automate this work, in combination with the capacity of thestrongest AI computers resulted in SNAIPER"
          )}
        </span>
        <span>
          {t(
            "SNAIPER creates, predicts and deploy SEO data using automatedsessions."
          )}
        </span>
        <span>
          {t("SNAIPER is made of the power of IBM WATSONX, GOOGLE and OPEN AI")}
        </span>
      </div>
    </div>
  );
};

export default Created;
