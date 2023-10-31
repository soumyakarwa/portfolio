import React from "react";
import "./Content.css";

const Content = ({ imageSrc, subtitle, description }) => {
  const renderImageOrPlaceholder = imageSrc ? (
    <img src={imageSrc} alt="Project" />
  ) : (
    <div className="placeholder">coming soon</div>
  );

  return (
    <div className="content-container">
      <div className="image-container">{renderImageOrPlaceholder}</div>
      <div className="description-container">
        <div className="subtitle">{subtitle}</div>
        <div className="description-text">{description}</div>
      </div>
    </div>
  );
};

export default Content;
