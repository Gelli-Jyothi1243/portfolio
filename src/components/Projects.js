import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Hepatitis Prediction and Reminder System',
      description: 'A healthcare prediction system using machine learning algorithms to analyze patient data with automated reminders.',
      technologies: ['Python', 'Scikit-learn', 'React.js', 'Node.js', 'MongoDB', 'Twilio'],
      highlights: [
        'Developed ML algorithms to analyze patient data',
        'Performed data preprocessing and feature engineering',
        'Integrated Twilio APIs for automated notifications',
        'Designed REST APIs and user-friendly interfaces'
      ],
      github: 'https://github.com/Gelli-Jyothi1243/hepatitis',
      icon: '🏥'
    },
    {
      title: 'Green Cycle - Organic Waste Management Platform',
      description: 'A web platform connecting organic waste sellers and buyers with secure payment integration.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Twilio', 'Multer'],
      highlights: [
        'Built platform for waste sellers and buyers',
        'Implemented secure REST APIs for transactions',
        'Integrated Stripe payment gateway',
        'Improved data management with MongoDB'
      ],
      github: 'https://github.com/Gelli-Jyothi1243/OrganicWasteApplication',
      icon: '♻️'
    },
    {
      title: 'Cosmos Gaming - Real-Time Virtual Interaction Platform',
      description: 'A real-time interaction platform using Socket.IO and MERN stack for dynamic communication.',
      technologies: ['React (Vite)', 'Tailwind CSS', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB'],
      highlights: [
        'Developed real-time interaction features',
        'Implemented user activity tracking',
        'Managed real-time data synchronization',
        'Optimized backend for concurrent users'
      ],
      github: 'https://github.com/Gelli-Jyothi1243/cosmos_gaming',
      icon: '🎮'
    }
  ];

  return (
    <section className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <ul className="project-highlights">
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
