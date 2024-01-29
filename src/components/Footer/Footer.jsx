// Footer.jsx
import React from "react";
import "./Footer.css";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="email">karws352@newschool.edu</span>
        <div className="icons">
          <a href="https://github.com/soumyakarwa">
            <Github className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/soumyakarwa/">
            <LinkedIn className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
