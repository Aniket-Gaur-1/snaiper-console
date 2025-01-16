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
    <div className="brand-work-container animate-on-scroll">
      <h2 className="brand-work-heading animate-on-scroll">
        How does SNAIPER work?
      </h2>
      <p className="brand-work-description animate-on-scroll">
        SNAIPER empowers creators and brands to share digital property ownership
        and automatically coordinate earnings and royalty payments––forming
        strong communities around digital property.
      </p>
    </div>
  );
};

export default BrandWork;
