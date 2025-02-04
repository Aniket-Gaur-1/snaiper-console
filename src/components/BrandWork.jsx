import React from "react";
import "../styles/brandWork.css";

const BrandWork = () => {
  return (
    <div className="brand-work-container" id="brand-work-section">
      <h2 className="brand-work-heading">How does SNAIPER work?</h2>
      <div className="description">
        <p className="brand-work-description">
          <span>register client</span>
          <span>chose plan</span>
          <span>set frequency for updating SEO parameters</span>
          <span>from weekly to monthly</span>
          <span>chose type of updates</span>
          <span>as keywords, metatags, and blog content</span>
          <span>chose frequency for traffic report</span>
          <span>click execute</span>
        </p>
        <p className="brand-work-description">
          <span>client will experience</span>
          <span>more traffic</span>
          <span>better ranking</span>
          <span>regular traffic reports as emails</span>
          <span>no cure – No pay</span>
          <span>no increased traffic – no costs</span>
        </p>
      </div>
    </div>
  );
};

export default BrandWork;
