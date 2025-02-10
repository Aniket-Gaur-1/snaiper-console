import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/common.css";

const Dull = () => {
  const { t } = useTranslation();

  return (
    <div className="common-container">
      <div className="common-heading">{t("Let SNAIPER do the dull work")}</div>
      <div className="common-text">
        <span>{t("SNAIPER uses WATSONX and OpenAI as main engines.")}</span>
        <span>
          {t(
            "The extreme combo of OPENAI and WATSONX and SNAIPER's algorithms predicts future keywords and trends with stunning precision."
          )}
        </span>
        <span>
          {t(
            "Let SNAIPER do the time-consuming work, For staff to use more time on sales."
          )}
        </span>
      </div>
    </div>
  );
};

export default Dull;
