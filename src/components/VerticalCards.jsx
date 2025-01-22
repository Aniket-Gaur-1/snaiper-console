import React from "react";
import "../styles/verticalCards.css";

const VerticalCards = ({ item = {} }) => {
  // Destructure with defaults for fallback values
  const { stepNumber, title, description } = item;

  return (
    <div className="vertical-card">
      <div className="container noselect">
        <div className="canvas">
          {/* Trackers remain part of your CSS visuals */}
          <div className="tracker tr-1"></div>
          <div className="tracker tr-2"></div>
          <div className="tracker tr-3"></div>
          <div className="tracker tr-4"></div>
          <div className="tracker tr-5"></div>
          <div className="tracker tr-6"></div>
          <div className="tracker tr-7"></div>
          <div className="tracker tr-8"></div>
          <div className="tracker tr-9"></div>
          <div className="tracker tr-10"></div>
          <div className="tracker tr-11"></div>
          <div className="tracker tr-12"></div>
          <div className="tracker tr-13"></div>
          <div className="tracker tr-14"></div>
          <div className="tracker tr-15"></div>
          <div className="tracker tr-16"></div>
          <div className="tracker tr-17"></div>
          <div className="tracker tr-18"></div>
          <div className="tracker tr-19"></div>
          <div className="tracker tr-20"></div>
          <div className="tracker tr-21"></div>
          <div className="tracker tr-22"></div>
          <div className="tracker tr-23"></div>
          <div className="tracker tr-24"></div>
          <div className="tracker tr-25"></div>

          {/* Content rendered based on props */}
          <div id="card">
            <div className="process-content">
              <h1 className="process-step-number">{stepNumber}</h1>
              <h2 className="title">{title}</h2>
              <p className="subtitle">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCards;
