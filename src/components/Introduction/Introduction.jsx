import React, { useEffect, useState } from "react";
import "./Introduction.css";
import GradientText from "../GradientText/GradientText.jsx";
import Arrow from "../Arrow/Arrow.jsx";

const Introduction = () => {
  const [myFontSize, setMyFontSize] = useState("");
  const [myArrowSize, setMyArrowSize] = useState("");
  const [myArrowColor, setMyArrowColor] = useState("");

  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    setMyFontSize(
      rootStyle.getPropertyValue("--introduction-font-size").trim()
    );
    setMyArrowSize(rootStyle.getPropertyValue("--arrow-size").trim());
    setMyArrowColor(rootStyle.getPropertyValue("--font-color").trim());
  }, []);

  return (
    <div className="text-container">
      <div className="text-left">
        <GradientText text="visual designer" fontSize={myFontSize} />
      </div>
      <div className="text-center">
        <GradientText text="&" fontSize={myFontSize} />
      </div>
      <div className="text-right">
        <GradientText text="creative developer" fontSize={myFontSize} />
      </div>
      <div className="arrow-container">
        <Arrow className="arrow" fontSize={myArrowSize} color={myArrowColor} />
      </div>
      {/* <div className="text-center">
        <GradientText text="ai enthusiast" fontSize="6.5rem" />
      </div> */}
    </div>
  );
};

export default Introduction;
