// App.jsx
import React, { useState } from 'react';
import "./App.css";
import Navbar from '../src/components/Navbar/Navbar.jsx';
import Work from "../src/components/Work/Work.jsx";
import Play from "../src/components/Play/Play.jsx";
import About from "../src/components/About/About.jsx";

const App = () => {
  const [currentSection, setCurrentSection] = useState('work');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'work':
        return <Work />;
      case 'play':
        return <Play />;
      case 'about':
        return <About />;
      default:
        return <Work />; 
    }
  };

  return (
    <div className="App">
      <Navbar onSectionChange={handleSectionChange} />
      {renderSection()}
    </div>
  );
};

export default App;
