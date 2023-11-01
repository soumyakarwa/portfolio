import React, { useState, useEffect } from "react";
import "./Work.css";
import ProjectHolder from "../ProjectHolder/ProjectHolder.jsx";
import wordPotraitGif from "../../assets/wordpotrait.gif";
import typographicIllusionGif from "../../assets/typographicIllusion.gif";
import fibonacciGif from "../../assets/fibonacci-copy.gif";

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
        githubpages="https://soumyakarwa.github.io/5in5/"
        repolink="https://github.com/soumyakarwa/5in5"
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
        img={fibonacciGif}
        subtitle="The Golden Ratio"
        description="Fibonacci weaves its way through the natural world with an elegance that poets and philosophers have long admired. It is not just a sequence but a natural law, a universal language of growth and harmony. It captures a beauty that is both calculated and free, a reminder that within the apparent chaos of life, there is order."
        githubpages="https://soumyakarwa.github.io/typography_poster/"
        repolink="https://github.com/soumyakarwa/typography_poster"
        isShown={
          hoveredProject === "fibonacci" || selectedProject === "fibonacci"
        }
        onHover={() => handleProjectHover("fibonacci")}
        onClick={() => handleProjectClick("fibonacci")}
      />
      <ProjectHolder
        projectName="pages through time"
        projectScope="data visualization"
        subtitle="Trends and Patterns in a Literary Landscape"
        description="I was thinking about what’s constant about me throughout the years - through school, college and life events. It’s that I love to read. No matter what’s going on in my life, what my state of my mind is, I always find solace in books. Its my way to escape into a different life, to experiences that aren’t my own. I love understanding different characters, I love to dissect their motivations, their habits and their traits. Books are truly my safe haven. 

        I compiled data on the variety of books I’ve read over the past 10-12 years (through Goodreads, Kindle, physical books, online buying history and iBooks app) to analyze any trends and patterns that arise in the books I’ve read over the years. Each datapoint had nine properties: Name, Author, Rating (out of 5), Year Read, Genres, Length, Year Published, Frequency, and Emotion."
        isShown={hoveredProject === "pages" || selectedProject === "pages"}
        onHover={() => handleProjectHover("pages")}
        onClick={() => handleProjectClick("pages")}
      />
      <ProjectHolder
        projectName="typographic illusion"
        projectScope="creative coding"
        img={typographicIllusionGif}
        subtitle="Hidden in Plain Sight"
        description="I wanted to create something very simple but beautiful."
        githubpages="https://soumyakarwa.github.io/optical_illusion/"
        repolink="https://github.com/soumyakarwa/optical_illusion"
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
