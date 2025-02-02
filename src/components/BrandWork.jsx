import React, { useEffect } from "react";
import "../styles/brandWork.css";

const BrandWork = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="brand-work-container animate-on-scroll"
      id="brand-work-section"
    >
      <h2 className="brand-work-heading animate-on-scroll">
        How does SNAIPER work?
      </h2>
      <div className="description">
        <p className="brand-work-description animate-on-scroll">
          <span>register client</span>
          <span>chose plan</span>
          <span>set frequency for updating SEO parameters</span>
          <span>from weekly to monthly</span>
          <span>chose type of updates</span>
          <span>as keywords, metatags, and blog content</span>
          <span>chose frequency for traffic report</span>
          <span>click execute</span>
        </p>
        <p className="brand-work-description animate-on-scroll">
          <span>client will experience </span>
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
