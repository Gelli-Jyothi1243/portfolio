import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="section contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-content">
        <div className="contact-intro">
          <p>I'm always open to discussing new projects, opportunities, and collaborations. Feel free to reach out!</p>
        </div>
        
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-icon">📧</div>
            <h3>Email</h3>
            <a href="mailto:gellijyothi17@gmail.com">gellijyothi17@gmail.com</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">📞</div>
            <h3>Phone</h3>
            <a href="tel:+919494165651">+91 9494165651</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">📍</div>
            <h3>Location</h3>
            <p>Narsapur, Andhra Pradesh</p>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/jyothi-gelli-791017257/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            <span className="social-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Gelli-Jyothi1243" target="_blank" rel="noopener noreferrer" className="social-link github">
            <span className="social-icon">💻</span>
            <span>GitHub</span>
          </a>
          <a href="https://leetcode.com/u/Jyothi_gelli/" target="_blank" rel="noopener noreferrer" className="social-link leetcode">
            <span className="social-icon">🧩</span>
            <span>LeetCode</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
