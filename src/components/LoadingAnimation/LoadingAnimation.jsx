// LoadingAnimation.js
import React, { useEffect, useState } from "react";
import "./LoadingAnimation.css";

const LoadingAnimation = () => {
  const [hideAnimation, setHideAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideAnimation(true);
    }, 800); // 3000ms = 3 seconds, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-overlay ${hideAnimation ? "hide" : ""}`}></div>
  );
};

export default LoadingAnimation;
