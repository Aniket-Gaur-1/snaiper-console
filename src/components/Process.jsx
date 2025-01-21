import React from "react";
import "../styles/process.css";

const Process = () => {
  return (
    <div className="process-container">
      <div className="process-line"></div>

      <div className="process-item-container">
        <div className="process-item">
          <h1 className="process-step-number">01</h1>
          <h2 className="process-step-title">Participants</h2>
          <p className="process-step-description">
            Join tight-knit communities around your favorite creators, thought
            leaders, products, and experiences.
          </p>
        </div>

        <div className="process-item">
          <h1 className="process-step-number">02</h1>
          <h2 className="process-step-title">Distribution</h2>
          <p className="process-step-description">
            Sell digital products and amplify your reach through a new network
            typology. Manage product fulfillment with off-chain compute.
          </p>
        </div>

        <div className="process-item">
          <h1 className="process-step-number">03</h1>
          <h2 className="process-step-title">Revenue-Sharing</h2>
          <p className="process-step-description">
            Split royalties amongst thousands of users and seamlessly route
            payments across networks.
          </p>
        </div>

        <div className="process-item">
          <h1 className="process-step-number">04</h1>
          <h2 className="process-step-title">Ownership</h2>
          <p className="process-step-description">
            Sub-license your work and set your own terms around price, access,
            availability, and licensing. Manage rights with transparent,
            on-chain transactions across multiple blockchains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
