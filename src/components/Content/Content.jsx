import React from "react";
import "./Content.css";

const Content = ({
  imageSrc,
  subtitle,
  description,
  githubpages,
  repolink,
}) => {
  const renderImageOrPlaceholder = imageSrc ? (
    <img src={imageSrc} alt="Project" />
  ) : (
    <div className="placeholder">coming soon</div>
  );

  const renderButtons = githubpages ? (
    <>
      <div className="button">
        <a href={githubpages}>check it out</a>
      </div>
      <div className="button">
        <a href={repolink}>github repo</a>
      </div>
    </>
  ) : null;

  return (
    <div className="content-container">
      <div className="image-container">{renderImageOrPlaceholder}</div>
      <div className="description-container">
        <div className="subtitle">{subtitle}</div>
        <div className="description-text">{description}</div>
        <div className="button-container">{renderButtons}</div>
      </div>
    </div>
  );
};

export default Content;
