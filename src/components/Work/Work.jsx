import React from "react";
import "./Work.css";
import ProjectHolder from "../ProjectHolder/ProjectHolder.jsx";

const Work = () => {
  return (
    <div className="content-container">
      <ProjectHolder
        projectName="data portrait"
        projectScope="creative coding, data visualization"
      />
      <ProjectHolder
        projectName="goodreads digital library"
        projectScope="data visualization"
      />
      <ProjectHolder
        projectName="fibonacci: the golden ratio"
        projectScope="creative coding, digital media"
      />
      <ProjectHolder
        projectName="typographic illusion"
        projectScope="creative coding"
      />
      <hr className="divider" />
    </div>
  );
};

export default Work;
