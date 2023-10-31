// Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = ({ onSectionChange }) => {
  return (
    // <div className="nav">
    <nav className="navbar-container">
      <div className="navbar-left">
        <div
          className="navbar-component"
          onClick={() => onSectionChange("work")}
        >
          soumya karwa
        </div>
      </div>
      <div className="navbar-right">
        <div
          className="navbar-component"
          onClick={() => onSectionChange("work")}
        >
          work
        </div>
        <div
          className="navbar-component"
          onClick={() => onSectionChange("play")}
        >
          play
        </div>
        <div
          className="navbar-component"
          onClick={() => onSectionChange("about")}
        >
          about
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
