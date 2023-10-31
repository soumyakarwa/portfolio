// ProjectHolder.jsx
import React from "react";
import "./ProjectHolder.css";
import Content from "../Content/Content.jsx";

const ProjectHolder = ({
  projectName,
  projectScope,
  img,
  subtitle,
  description,
  isShown,
  onHover,
  onClick,
}) => {
  return (
    <div
      className="project-holder"
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(null)} // Clear the hovered project on mouse leave
      onClick={onClick}
    >
      <hr className="divider" />
      <div className="project-content">
        <div className="project-name">{projectName}</div>
        <div className="project-scope">{projectScope}</div>
      </div>
      {isShown && (
        <Content imageSrc={img} subtitle={subtitle} description={description} />
      )}
    </div>
  );
};

export default ProjectHolder;
