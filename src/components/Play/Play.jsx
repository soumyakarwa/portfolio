import React from "react";
import "./Play.css";
import ProjectHolder from "../ProjectHolder/ProjectHolder.jsx";

const Play = () => {
  return (
    <div className="content-container">
      <ProjectHolder
        projectName="typographic form"
        projectScope="creative coding"
      />
      <ProjectHolder
        projectName="lost and found"
        projectScope="creative coding, illustration"
      />
      <hr className="divider" />
    </div>
  );
};

export default Play;
