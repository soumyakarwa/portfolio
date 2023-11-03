// ProjectHolder.jsx
import React, { useState } from "react";
import "./ProjectHolder.css";
import Content from "../Content/Content.jsx";

const ProjectHolder = ({
  projectName,
  projectScope,
  img,
  subtitle,
  description,
  githubpages,
  repolink,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [count, setCount] = useState(0);

  const handleMouseEnter = () => {
    setHover(true);
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
    if (click) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  const handleClick = () => {
    console.log(count);
    if (count === 0) {
      setClick(true);
      setIsExpanded(true);
      setCount(1);
    } else {
      setClick(false);
      setIsExpanded(false);
      setCount(0);
    }
  };

  return (
    <div
      className="project-holder"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <hr className="divider" />
      <div className="project-content">
        <div className="project-name">{projectName}</div>
        <div className="project-scope">{projectScope}</div>
      </div>
      <div className={`holder ${isExpanded ? "visible" : "hidden"}`}>
        <Content
          imageSrc={img}
          subtitle={subtitle}
          description={description}
          githubpages={githubpages}
          repolink={repolink}
        />
      </div>
    </div>
  );
};

export default ProjectHolder;
