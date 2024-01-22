import React from "react";
import "./ProjectHolderNew.css"; // Assuming your CSS is in this file

const ProjectHolderNew = ({ title, imageUrl }) => {
  return (
    <div className="project-holder">
      <div className="title">{title}</div>
      <img src={imageUrl} alt={title} className="project-image" />
    </div>
  );
};

export default ProjectHolderNew;
