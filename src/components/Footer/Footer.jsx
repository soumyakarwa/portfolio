// Footer.jsx
import React from "react";
import "./Footer.css"; // Import the CSS (if you create a CSS file)

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">Get in touch</div>
      <div className="footer-right">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/path-to-your/github-icon.png" alt="GitHub" />
        </a>
        <a href="mailto:your-email@example.com">
          <img src="/path-to-your/email-icon.png" alt="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-username/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/path-to-your/linkedin-icon.png" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
