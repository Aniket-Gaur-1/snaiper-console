import React, { useEffect } from "react";
import "../styles/founder.css";

const Founder = () => {
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
    <div className="founder-section animate-on-scroll">
      <h2 className="founder-heading animate-on-scroll">
        Illuminating True Human Purpose Through Technology
      </h2>
      <div className="founder-content">
        <div className="about-founder animate-on-scroll">
          <img
            src="./images/founder.jpg"
            alt="Founder"
            className="founder-image"
          />
          <h1 className="founder-name">Sindre Godager</h1>
          <p className="founder">Founder, SNAIPER</p>
        </div>
        <blockquote className="founder-quote animate-on-scroll">
          "The multiplayer digital economy empowers smaller players to unite—
          inviting would-be consumers to become participants and bigger players
          to become powerful platforms. It's the digital equivalent of the
          common property rights that form corporations, but without the
          government contracts or physical property rights enforcement that make
          corporations possible."
        </blockquote>
      </div>
    </div>
  );
};

export default Founder;
