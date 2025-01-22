import React from "react";
import "../styles/process.css";
import VerticalCards from "./VerticalCards";

const Process = () => {
  const processItems = [
    {
      stepNumber: "01",
      title: "Participants",
      description:
        "Join tight-knit communities around your favorite creators,thoughtleaders, products, and experiences.",
    },
    {
      stepNumber: "02",
      title: "Distribution",
      description:
        "Sell digital products and amplify your reach through a new network typology. Manage product fulfillment with off-chain compute.",
    },
    {
      stepNumber: "03",
      title: "Revenue-Sharing",
      description:
        "Split royalties amongst thousands of users and seamlessly route payments across networks.",
    },
    {
      stepNumber: "04",
      title: "Ownership",
      description:
        "Sub-license your work and set your own terms around price, access, availability, and licensing. Manage rights with transparent, on-chain transactions across multiple blockchains.",
    },
  ];

  console.log("Process Items:", processItems);

  return (
    <div className="animated-cards">
      {processItems?.map((item, index) => (
        <VerticalCards key={index} item={item || {}} />
      ))}
    </div>
  );
};

export default Process;
