import React, { useState } from "react";
import "./Work.css";
import ProjectHolder from "../ProjectHolder/ProjectHolder.jsx";
import wordPotraitGif from "../../assets/wordpotrait.gif";
import fibonacciGif from "../../assets/fibonacci.gif";

const Work = () => {
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
    <div className="work-container">
      <ProjectHolder
        projectName="from words to worlds"
        projectScope="creative coding, data visualization"
        img={wordPotraitGif}
        subtitle="Computational Analysis of Literary Building Blocks"
        description="What is fiction really made of? What does an editor do? They work on the structure, the word choice, the sentence length, the chapters and every small detail that makes a good story into a great book. I wanted to examine these nuances and chose words as a starting point. I wanted to make a data portrait of sorts using a dataset that highlighted the frequency of different words in a book."
        isShown={
          hoveredProject === "word portrait" ||
          selectedProject === "word portrait"
        }
        onHover={() => handleProjectHover("word portrait")}
        onClick={() => handleProjectClick("word portrait")}
      />
      <ProjectHolder
        projectName="fibonacci"
        projectScope="creative coding, digital media"
        img={wordPotraitGif}
        subtitle="The golden ratio"
        description="There's something so beautiful about the natural occurances of fibonacci."
        isShown={
          hoveredProject === "fibonacci" || selectedProject === "fibonacci"
        }
        onHover={() => handleProjectHover("fibonacci")}
        onClick={() => handleProjectClick("fibonacci")}
      />
      <ProjectHolder
        projectName="pages through time"
        projectScope="data visualization"
        img={wordPotraitGif}
        description="What is fiction really made of? What does an editor do? They work on the structure, the word choice, the sentence length, the chapters and every small detail that makes turns a good story into a great book. I wanted to examine these nuances and chose **words** as a starting point. I wanted to make a data portrait of sorts using a dataset that highlighted the frequency of different words in a book."
        isShown={hoveredProject === "pages" || selectedProject === "pages"}
        onHover={() => handleProjectHover("pages")}
        onClick={() => handleProjectClick("pages")}
      />
      <ProjectHolder
        projectName="typographic illusion"
        projectScope="creative coding"
        img={wordPotraitGif}
        subtitle="Hidden in plain sight"
        description="What is fiction really made of? What does an editor do? They work on the structure, the word choice, the sentence length, the chapters and every small detail that makes turns a good story into a great book. I wanted to examine these nuances and chose **words** as a starting point. I wanted to make a data portrait of sorts using a dataset that highlighted the frequency of different words in a book."
        isShown={
          hoveredProject === "illusion" || selectedProject === "illusion"
        }
        onHover={() => handleProjectHover("illusion")}
        onClick={() => handleProjectClick("illusion")}
      />
      <hr className="divider" />
    </div>
  );
};

export default Work;
