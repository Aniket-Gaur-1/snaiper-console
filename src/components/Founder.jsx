import React from "react";
import "../styles/founder.css";

const Founder = () => {
  return (
    <div className="founder-section">
      <div className="founder-heading">
        <span>Time is Money</span>
        <span>- also for Media Agencies</span>
      </div>
      <div className="founder-content">
        <div className="about-founder">
          <img
            src="./images/founder.jpeg"
            alt="Founder"
            className="founder-image"
          />
          <h1 className="founder-name">Sindre Godager</h1>
          <div className="founder">
            <span>Co Founder of</span>
            <span>The SNAIPER SEO CONSOLE</span>
          </div>
        </div>
        <blockquote className="founder-quote">
          <p>
            The SNAIPER SEO CONSOLE is built on the idea that people should
            focus on creative and fun work while AI engines handle the
            time-consuming, repetitive, and dull tasks. The result? Hundreds of
            hours freed up for more profitable work—like onboarding new clients.
          </p>
          <p>
            And why not let our partners share in the success? After all, they
            are the driving force behind SNAIPER becoming the most preferred SEO
            console on the market.
          </p>
          <p>
            And when SNAIPER is so efficient, -why not also give the clients a
            No cure, No pay deal? We did. SNAIPER SEO CONSOLE -A triple win!
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default Founder;
