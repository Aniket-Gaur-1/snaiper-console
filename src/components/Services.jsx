import React from "react";
import "../styles/service.css";

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-gallery">
        {[
          {
            img: "/images/employee.png",
            title: "let SEO work focus on sales - gives  happier staff",
          },
          {
            img: "/images/graph.png ",
            title: "increase revenue and higher profit",
          },
          {
            img: "/images/sales.png",
            title: "satisfied customers - the best sales team",
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
