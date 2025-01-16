import React, { useEffect } from "react";
import "../styles/service.css";

const Services = () => {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="services-section animate-on-scroll">
      <h1 className="services-heading animate-on-scroll">
        Be Your Own Platform. Share Freely and Fairly. Participate, and Own a
        Piece.
      </h1>
      <div className="services-gallery">
        <div className="service-card animate-on-scroll">
          <img src="" alt="Participants" className="service-image" />
          <h2 className="service-title">Participants</h2>
          <p className="service-description">
            Engage with your favorite creators and brands while earning
            royalties and rewards.
          </p>
          <a href="" className="service-link">
            Start Earning →
          </a>
        </div>
        <div className="service-card animate-on-scroll">
          <img src="" alt="Creators & Brands" className="service-image" />
          <h2 className="service-title">Creators & Brands</h2>
          <p className="service-description">
            Empower your creative freedom by selling digital content and sharing
            earnings with collaborators and fans with ease.
          </p>
          <a href="" className="service-link">
            Start Selling →
          </a>
        </div>
        <div className="service-card animate-on-scroll">
          <img src="" alt="Enterprise" className="service-image" />
          <h2 className="service-title">Enterprise</h2>
          <p className="service-description">
            Effortlessly create, sell, and manage digital products and automate
            global payouts while enjoying low transaction fees.
          </p>
          <a href="" className="service-link">
            Start Building →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
