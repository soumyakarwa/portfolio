// Content.jsx
import React from "react";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ imageSrc, subtitle, description }) => {
  return (
    <div className="content-container">
      <div className="image-container">
        <img src={imageSrc} alt="Project GIF" />
      </div>
      <div className="description-container">
        <div className="subtitle">{subtitle}</div>
        <div className="description-text">{description}</div>
      </div>
    </div>
  );
};

// Define PropTypes (optional but recommended)
Content.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Content;
