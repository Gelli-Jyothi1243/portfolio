import React from 'react';
import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      title: 'Oracle Database Foundations',
      issuer: 'Oracle Academy',
      icon: '📊'
    },
    {
      title: 'Java Programming',
      issuer: 'Infosys Springboard',
      icon: '☕'
    },
    {
      title: 'Introduction to Python',
      issuer: 'Kaggle',
      icon: '🐍'
    },
    {
      title: 'Full Stack Development Internship',
      issuer: 'SkillDzire',
      icon: '💼'
    }
  ];

  return (
    <section className="section certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="extracurricular-section">
        <h3 className="subsection-title">Extracurricular Activities</h3>
        <ul className="extracurricular-list">
          <li>Actively participated in technical events, hackathons, and collaborative software development projects</li>
          <li>Demonstrated leadership, communication, and teamwork through academic and extracurricular activities</li>
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
