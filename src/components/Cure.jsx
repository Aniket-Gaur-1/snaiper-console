import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/common.css";

const Cure = () => {
  const { t } = useTranslation();
  return (
    <div className="common-container">
      <div className="common-heading">
        {/* NO CURE NO PAY */}
        <span>{t("NO CURE")} </span> <span>{t(" NO PAY")}</span>
      </div>
      <div className="common-text">
        <span>
          {t(
            "If SNAIPER doesn't deliver increased traffic to your clients web page,he don’t pay."
          )}
        </span>
        <span>{t("This shows how much we and you can trust SNAIPER.")}</span>
        <span>
          {t(
            "We can guarantee improved ratings, improved traffic and we will deliver documentation for it."
          )}
        </span>
        <span>
          {t(
            " Implement SNAIPER at your clients web sites. There is nothing to loose"
          )}
        </span>
      </div>
    </div>
  );
};

export default Cure;
