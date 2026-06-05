import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <div id="about" className={activeSection === 'about' ? 'active' : ''}>
          <About />
        </div>
        <div id="education" className={activeSection === 'education' ? 'active' : ''}>
          <Education />
        </div>
        <div id="skills" className={activeSection === 'skills' ? 'active' : ''}>
          <Skills />
        </div>
        <div id="projects" className={activeSection === 'projects' ? 'active' : ''}>
          <Projects />
        </div>
        <div id="achievements" className={activeSection === 'achievements' ? 'active' : ''}>
          <Achievements />
        </div>
        <div id="certifications" className={activeSection === 'certifications' ? 'active' : ''}>
          <Certifications />
        </div>
        <div id="contact" className={activeSection === 'contact' ? 'active' : ''}>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
