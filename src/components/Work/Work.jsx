import "./Work.css";
import ProjectHolder from "../ProjectHolder/ProjectHolder.jsx";
import wordPotraitGif from "../../assets/wordpotrait.gif";
import typographicIllusionGif from "../../assets/typographicIllusion.gif";
import fibonacciGif from "../../assets/fibonacci-copy.gif";
import nuclearGif from "../../assets/nuclearDawn1.gif";
import lightAndTime from "../../assets/lightAndTime.gif";
import formGeneratorGif from "../../assets/formGenerator.gif";

const Work = () => {
  return (
    <div className="work-container">
      <ProjectHolder
        projectName="fibonacci"
        projectScope="creative coding, digital media"
        img={fibonacciGif}
        subtitle="The Golden Ratio"
        description="Fibonacci weaves its way through the natural world with an elegance that poets and philosophers have long admired. It is not just a sequence but a natural law, a universal language of growth and harmony. It captures a beauty that is both calculated and free, a reminder that within the apparent chaos of life, there is order."
        githubpages="https://soumyakarwa.github.io/typography_poster/"
        repolink="https://github.com/soumyakarwa/typography_poster"
      />
      <ProjectHolder
        projectName="from words to worlds"
        projectScope="creative coding, data visualization"
        img={wordPotraitGif}
        subtitle="Computational Analysis of Literary Building Blocks"
        description="What is fiction really made of? What does an editor do? They work on the structure, the word choice, the sentence length, the chapters and every small detail that makes a good story into a great book. I wanted to examine these nuances and chose words as a starting point. I wanted to make a data portrait of sorts using a dataset that highlighted the frequency of different words in a book."
        githubpages="https://soumyakarwa.github.io/5in5/"
        repolink="https://github.com/soumyakarwa/5in5"
      />
      <ProjectHolder
        projectName="light, space & time"
        projectScope="creative coding"
        img={lightAndTime}
        subtitle="Stellar Memories"
        description="I've always been fascinated with the relationship between light & time. And how sometimes, the stars we see in the night sky might have already died, because they might be so far away that their light has taken years to reach us. We see stars that are billions of light-years away as they were billions of years ago. I find it really profound that light (or waves itself) creates a difference between the time at which things happen and the time at which we are able to see them."
        githubpages="https://soumyakarwa.github.io/experimental_clock-new/"
        repolink="https://github.com/soumyakarwa/experimental_clock-new"
      />
      <ProjectHolder
        projectName="pages through time"
        projectScope="data visualization"
        subtitle="Trends and Patterns in a Literary Landscape"
        description="I was thinking about what’s constant about me throughout the years - through school, college and life events. It’s that I love to read. No matter what’s going on in my life, what my state of my mind is, I always find solace in books. Its my way to escape into a different life, to experiences that aren’t my own. I love understanding different characters, I love to dissect their motivations, their habits and their traits. Books are truly my safe haven. 

        I compiled data on the variety of books I’ve read over the past 10-12 years (through Goodreads, Kindle, physical books, online buying history and iBooks app) to analyze any trends and patterns that arise. I wanted to visualize it in a way that could help me see how I've grown as a reader. Am I a plot reader, do I read for the characters? Each datapoint had nine properties: Name, Author, Rating (out of 5), Year Read, Genres, Length, Year Published, Frequency, and Emotion."
      />
      <ProjectHolder
        projectName="nuclear dawn"
        projectScope="editorial design"
        img={nuclearGif}
        subtitle="A Brief History of the Nuclear Age"
        description="A short while ago, I learned the gravity of the nuclear age: the ability of global leaders to bring an end to civilization with the push of a button and how often we’ve come close to it since the detonation of the first atomic bomb in 1945. 

        I designed and curated content for a 120-page, 5x8 book that delves into the intricate and often unsettling history of nuclear weapons as well as the complex web of scientific breakthroughs, geopolitical maneuvers, and ethical dilemmas that came about since 1945."
      />
      <ProjectHolder
        projectName="typographic form"
        projectScope="creative coding"
        img={formGeneratorGif}
        subtitle="Anatomy of Curiosity"
        description="I'm taking a Typography elective this semester and am feeling very inspired by the intricacy of type. I wanted to play around with the form of the word curiosity."
        githubpages="https://soumyakarwa.github.io/form_generator/"
        repolink="https://github.com/soumyakarwa/form_generator"
      />
      <ProjectHolder
        projectName="typographic illusion"
        projectScope="creative coding"
        img={typographicIllusionGif}
        subtitle="Hidden in Plain Sight"
        description="I wanted to create something very simple but beautiful."
        githubpages="https://soumyakarwa.github.io/optical_illusion/"
        repolink="https://github.com/soumyakarwa/optical_illusion"
      />
      <hr className="divider" />
    </div>
  );
};

export default Work;
