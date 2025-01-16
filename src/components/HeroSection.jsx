import React, { useEffect } from "react";
import "../styles/heroSection.css";

const HeroSection = () => {
  useEffect(() => {
    const headings = document.querySelectorAll(".animate-on-scroll");

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
      { threshold: 0.5 }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-info">
        <h1 className="dreams animate-on-scroll">Share your Dreams</h1>
        <div className="brand-para animate-on-scroll">
          <p>Snaiper console is a global SEO tool for your website.</p>
          <div className="share-link">Login to Continue</div>
        </div>
      </div>
      <div className="brand-name animate-on-scroll">SNAIPER CONSOLE</div>
    </div>
  );
};

export default HeroSection;
