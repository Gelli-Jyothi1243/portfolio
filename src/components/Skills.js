import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'SQL'],
      icon: '💻'
    },
    {
      category: 'Core Subjects',
      skills: ['Data Structures and Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'],
      icon: '📖'
    },
    {
      category: 'Web Technologies',
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'REST APIs'],
      icon: '🌐'
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL'],
      icon: '🗄️'
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Power BI', 'MS Excel'],
      icon: '🛠️'
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management'],
      icon: '🤝'
    }
  ];

  return (
    <section className="section skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-name">{category.category}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
