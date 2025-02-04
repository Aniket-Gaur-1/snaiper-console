import React from "react";
import "../styles/service.css";

const Services = () => {
  return (
    <div className="services-section">
      <h1 className="services-heading">
        SNAIPER SEO CONSOLE is a powerful tool that automates the SEO work...
      </h1>

      <div className="services-gallery">
        {[
          {
            img: "/images/girl-image.jpg",
            title: "Participants",
            desc: "Engage with your favorite creators...",
            link: "Start Earning →",
          },
          {
            img: "/images/money.jpg",
            title: "Creators & Brands",
            desc: "Empower your creative freedom...",
            link: "Start Selling →",
          },
          {
            img: "/images/building.jpg",
            title: "Enterprise",
            desc: "Effortlessly create, sell, and manage digital products...",
            link: "Start Building →",
          },
        ].map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-section">
              <img
                src={service.img}
                alt={service.title}
                className="service-image"
              />
            </div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.desc}</p>
            <a href="#" className="service-link">
              {service.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
