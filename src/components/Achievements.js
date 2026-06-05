import React from 'react';
import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      title: '1st Place - Department Hackathon',
      description: 'Secured first place in department-level hackathon, demonstrating innovation and teamwork',
      icon: '🏆'
    },
    {
      title: 'GDSC Solution Challenge 2024',
      description: 'Participated in Google Developer Student Clubs Solution Challenge 2024',
      icon: '🎯'
    },
    {
      title: '1st Place - Throwball Competition',
      description: 'Secured first place in college-level Throwball competition',
      icon: '🏅'
    }
  ];

  return (
    <section className="section achievements-section">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
