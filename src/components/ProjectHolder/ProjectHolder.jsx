// ProjectHolder.jsx
import React from "react";
import "./ProjectHolder.css";

const ProjectHolder = ({ projectName, projectScope }) => {
  return (
    <div className="project-holder">
      <hr className="divider" />
      <div className="project-content">
        <div className="project-name">{projectName}</div>
        <div className="project-scope">{projectScope}</div>
      </div>
      {/* <hr className="divider" /> */}
    </div>
  );
};

export default ProjectHolder;
