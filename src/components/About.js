import React from 'react';
import './About.css';

function About() {
  return (
    <section className="section about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="summary">
            Enthusiastic Information Technology undergraduate (2026) with strong knowledge of 
            <strong> Java, Python, Data Structures, DBMS, Operating Systems, and Web Development</strong>. 
            Experienced in building full-stack applications using <strong>React.js, Node.js, Express.js, and MongoDB</strong>.
          </p>
          <p className="summary">
            Passionate about software development, problem-solving, and developing scalable applications. 
            Seeking an entry-level Software Engineer opportunity to contribute technical skills and grow in a dynamic organization.
          </p>
        </div>
        <div className="about-highlights">
          <div className="highlight-card">
            <h3>🎓 CGPA</h3>
            <p className="highlight-value">9.0</p>
          </div>
          <div className="highlight-card">
            <h3>💻 Projects</h3>
            <p className="highlight-value">3+</p>
          </div>
          <div className="highlight-card">
            <h3>🏆 Achievements</h3>
            <p className="highlight-value">Multiple</p>
          </div>
          <div className="highlight-card">
            <h3>📜 Certifications</h3>
            <p className="highlight-value">4+</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
