import React from "react";
import "./GradientText.css";

const GradientText = ({ text, fontSize = "2rem" }) => {
  const style = {
    fontSize: fontSize,
  };

  return (
    <div className="gradient-text" style={style}>
      {text}
    </div>
  );
};

export default GradientText;
