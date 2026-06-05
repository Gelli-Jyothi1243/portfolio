import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Shri Vishnu Engineering College for Women, Bhimavaram',
      period: 'Oct 2022 - Apr 2026',
      grade: 'CGPA: 9.0',
      icon: '🎓'
    },
    {
      degree: 'Intermediate (PCM)',
      institution: 'Adithya Junior College, Narsapur',
      period: '2020 - 2022',
      grade: 'Percentage: 96.1%',
      icon: '📚'
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'Sri Chaitanya Techno School, Narsapur',
      period: '2019 - 2020',
      grade: 'Percentage: 100%',
      icon: '🏫'
    }
  ];

  return (
    <section className="section education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="edu-icon">{edu.icon}</div>
            <div className="edu-content">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-period">{edu.period}</p>
              <p className="edu-grade">{edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
