import React from "react";
import {
  FaRegBuilding,
  FaRegHandshake,
  FaCogs,
  FaLevelUpAlt,
} from "react-icons/fa";

import "./whatweoffer.css";

const cardData = [
  {
    icon: <FaRegBuilding className="tags" />,
    title: "Explore AI Opportunities for Your Enterprise",
    description:
      "Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.",
  },
  {
    icon: <FaRegHandshake className="tags" />,
    title: "Design AI Trust Layer",
    description:
      "Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.",
  },
  {
    icon: <FaCogs className="tags" />,
    title: "Scalability-Focused Solutions",
    description:
      "Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.",
  },
  {
    icon: <FaLevelUpAlt className="tags" />,
    title: "End to end Workflow automation",
    description:
      "Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="icon">{card.icon}</div>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhatWeOffer;
