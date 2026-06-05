import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">JYOTHI SIVA NAGA DEVI GELLI</h1>
        <p className="tagline">Software Developer | Full Stack Engineer | Problem Solver</p>
        <div className="contact-links">
          <a href="tel:+919494165651" className="contact-link">📞 +91 9494165651</a>
          <a href="mailto:gellijyothi17@gmail.com" className="contact-link">📧 gellijyothi17@gmail.com</a>
          <a href="https://www.linkedin.com/in/jyothi-gelli-791017257/" target="_blank" rel="noopener noreferrer" className="contact-link">💼 LinkedIn</a>
          <a href="https://github.com/Gelli-Jyothi1243" target="_blank" rel="noopener noreferrer" className="contact-link">💻 GitHub</a>
          <a href="https://leetcode.com/u/Jyothi_gelli/" target="_blank" rel="noopener noreferrer" className="contact-link">🧩 LeetCode</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
