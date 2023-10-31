import React, { useState } from "react";
import "./Play.css";
import ProjectHolder from "../ProjectHolder/ProjectHolder.jsx";
import wordPotraitGif from "../../assets/wordpotrait.gif";

const Play = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectHover = (projectName) => {
    setHoveredProject(projectName);
  };

  const handleProjectClick = (projectName) => {
    setSelectedProject((prevProject) =>
      prevProject === projectName ? null : projectName
    );
  };

  return (
    <div className="play-container">
      <ProjectHolder
        projectName="typographic form"
        projectScope="creative coding"
        img={wordPotraitGif}
        subtitle="What is fiction made of?"
        description="What is fiction really made of? What does an editor do? They work on the structure, the word choice, the sentence length, the chapters and every small detail that makes a good story into a great book. I wanted to examine these nuances and chose words as a starting point. I wanted to make a data portrait of sorts using a dataset that highlighted the frequency of different words in a book."
        isShown={
          hoveredProject === "typographic form" ||
          selectedProject === "typographic form"
        }
        onHover={() => handleProjectHover("typographic form")}
        onClick={() => handleProjectClick("typographic form")}
      />
      <ProjectHolder
        projectName="lost and found"
        projectScope="creative coding, illustration"
        img={wordPotraitGif}
        subtitle="The golden ratio"
        description="What is fiction really made of? What does an editor do? They work on the structure, the word choice, the sentence length, the chapters and every small detail that makes turns a good story into a great book. I wanted to examine these nuances and chose **words** as a starting point. I wanted to make a data portrait of sorts using a dataset that highlighted the frequency of different words in a book."
        isShown={
          hoveredProject === "lost and found" ||
          selectedProject === "lost and found"
        }
        onHover={() => handleProjectHover("lost and found")}
        onClick={() => handleProjectClick("lost and found")}
      />
      <hr className="divider" />
    </div>
  );
};
export default Play;
