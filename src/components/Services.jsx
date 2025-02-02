import React, { useEffect, useRef } from "react";
import "../styles/service.css";

const Services = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-section">
      <h1 className="services-heading animate-on-scroll">
        SNAIPER SEO CONSOLE is a powerful tool that automates the SEO work,
        creating keywords, metatags and blog articles, generating traffic
        reports, and automated updates directly to websites at your set
        frequencies.
      </h1>
      <div className="services-gallery">
        {[
          {
            img: "/images/girl-image.jpg",
            title: "Participants",
            desc: "Engage with your favorite creators and brands while earning royalties and rewards.",
            link: "Start Earning →",
          },
          {
            img: "./images/money.jpg",
            title: "Creators & Brands",
            desc: "Empower your creative freedom by selling digital content and sharing earnings with collaborators and fans with ease.",
            link: "Start Selling →",
          },
          {
            img: "./images/building.jpg",
            title: "Enterprise",
            desc: "Effortlessly create, sell, and manage digital products and automate global payouts while enjoying low transaction fees.",
            link: "Start Building →",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="service-card animate-on-scroll"
            ref={(el) => (serviceRefs.current[index] = el)}
          >
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
