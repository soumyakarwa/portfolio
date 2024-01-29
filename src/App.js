// App.jsx
import React, { useState } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Work from "../src/components/Work/Work.jsx";
import Play from "../src/components/Play/Play.jsx";
import About from "../src/components/About/About.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import Introduction from "./components/Introduction/Introduction.jsx";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation.jsx";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const App = () => {
  const [currentSection, setCurrentSection] = useState("work");

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "work":
        return <Work />;
      // case 'play':
      //   return <Play />;
      case "about":
        return <About />;
      default:
        return <Work />;
    }
  };

  return (
    <div>
      <div className="App">
        <LoadingAnimation />
        <Navbar onSectionChange={handleSectionChange} />
        <Introduction />
        {/* <GradientText text="visual design + creative coding" /> */}
        {/* <SwitchTransition>
        <CSSTransition
          key={currentSection}
          timeout={300} // Match the duration in your CSS
          classNames="fade"
        >
          {renderSection()}
        </CSSTransition>
  </SwitchTransition>*/}
        <Footer />
      </div>
    </div>
  );
};

export default App;
