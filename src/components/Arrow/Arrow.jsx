// Arrow.jsx
import React from "react";
import "./Arrow.css";

const Arrow = ({
  fontSize = "var(--arrow-size)",
  color = "var(--font-color)",
}) => {
  const mainArrowStyle = {
    fontSize: fontSize,
    color: color,
  };

  const leftValue = (parseFloat(fontSize) / 32) * 100;

  const reflectedArrowStyle = {
    left: `${leftValue}%`,
  };

  return (
    <div className="arrow" style={mainArrowStyle}>
      v
      <span className="arrow-reflection" style={reflectedArrowStyle}>
        v
      </span>
    </div>
  );
};

export default Arrow;
