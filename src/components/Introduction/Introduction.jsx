import React from "react";
import "./Introduction.css"; // Make sure to import your CSS file
import GradientText from "../GradientText/GradientText.jsx"; // Import your GradientText component

const Introduction = () => {
  return (
    <div className="text-container">
      <div className="text-left">
        <GradientText text="CREATIVE" fontSize="8.5rem" />
      </div>
      <div className="text-right">
        <GradientText text="TECHNOLOGIST" fontSize="8.5rem" />
      </div>
    </div>
  );
};

export default Introduction;
