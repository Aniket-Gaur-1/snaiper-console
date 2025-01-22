import React from "react";
import "../styles/glowingcard.css";

const GlowingCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card2">
          <div className="step-number">1</div>
          <div className="process-title">Participants</div>
          <div className="description">
            Join tight-knit communities around your favorite creators,
            thoughtleaders, products, and experiences.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card2">
          <div className="step-number">2</div>
          <div className="process-title">Distribution</div>
          <div className="description">
            Sell digital products and amplify your reach through a new network
            typology. Manage product fulfillment with off-chain compute.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card2">
          <div className="step-number">3</div>
          <div className="process-title">Revenue-Sharing</div>
          <div className="description">
            Split royalties amongst thousands of users and seamlessly route
            payments across networks.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card2">
          <div className="step-number">4</div>
          <div className="process-title">Ownership</div>
          <div className="description">
            Sub-license your work and set your own terms around price, access,
            availability, and licensing. Manage rights with transparent,
            on-chain transactions across multiple blockchains.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowingCard;
