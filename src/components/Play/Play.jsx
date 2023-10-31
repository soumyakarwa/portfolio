import React, { useState } from "react";
import "./Play.css";
import ProjectHolder from "../ProjectHolder/ProjectHolder.jsx";
import formGeneratorGif from "../../assets/formGenerator.gif";
import lightAndTime from "../../assets/lightAndTime.gif";

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
        projectName="light, space & time"
        projectScope="creative coding"
        img={lightAndTime}
        subtitle="Stellar Memories"
        description="I've always been fascinated with the relationship between light & time. And how sometimes, the stars we see in the night sky might have already died, because they might be so far away that their light has taken years to reach us. We see stars that are billions of light-years away as they were billions of years ago. I find it really profound that light (or waves itself) creates a difference between the time at which things happen and the time at which we are able to see them."
        githubpages="https://soumyakarwa.github.io/experimental_clock-new/"
        repolink="https://github.com/soumyakarwa/experimental_clock-new"
        isShown={
          hoveredProject === "light and time" ||
          selectedProject === "light and time"
        }
        onHover={() => handleProjectHover("light and time")}
        onClick={() => handleProjectClick("light and time")}
      />
      {/* <ProjectHolder
        projectName="lost & found"
        projectScope="creative coding, illustration"
        img={wordPotraitGif}
        subtitle="Code & Illustration"
        description="I used p5.js to illustrate a bracelet lost at Melbourne airport. I wanted to convey the emotion of being lost. When I try to imagine objects I’ve lost, the image is always blurry - distant. I can picture the item, but I can never quite picture where I lost it. To convey this, I randomized the position of the bracelet in the airport. Each time the program is run, the bracelet is in a different position, depicting it as truly lost."
        isShown={
          hoveredProject === "lost and found" ||
          selectedProject === "lost and found"
        }
        onHover={() => handleProjectHover("lost and found")}
        onClick={() => handleProjectClick("lost and found")}
      /> */}
      <ProjectHolder
        projectName="typographic form"
        projectScope="creative coding"
        img={formGeneratorGif}
        subtitle="Anatomy of Curiosity"
        description="I'm taking a Typography elective this semester and am feeling very inspired by the intricacy of type. I wanted to play around with the form of the word curiosity."
        githubpages="https://soumyakarwa.github.io/form_generator/"
        repolink="https://github.com/soumyakarwa/form_generator"
        isShown={
          hoveredProject === "typographic form" ||
          selectedProject === "typographic form"
        }
        onHover={() => handleProjectHover("typographic form")}
        onClick={() => handleProjectClick("typographic form")}
      />
      <hr className="divider" />
    </div>
  );
};
export default Play;
