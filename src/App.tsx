import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import Header from './components/header';
import Footer from './components/footer';
import Projects from './components/project';
import { Section } from './types';
import './App.css';


const AboutMe: React.FC = () => (
  <Container text style={{ marginTop: '2em' }}>
    <h2>About Me</h2>
    <img src="https://via.placeholder.com/150" alt="Developer Avatar" style={{ borderRadius: '50%' }} />
    <p>
      Hi, I'm John Doe, a passionate web developer who loves creating modern, responsive web applications.
    </p>
  </Container>
);

// Inline Contact component (simple placeholder)
const Contact: React.FC = () => (
  <Container text style={{ marginTop: '2em' }}>
    <h2>Contact</h2>
    <p>Contact form goes here...</p>
  </Container>
);

// Inline Resume component
const Resume: React.FC = () => (
  <Container text style={{ marginTop: '2em' }}>
    <h2>Resume</h2>
    <p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
    </p>
    <ul>
      <li>HTML/CSS</li>
      <li>JavaScript/TypeScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>SQL/PostgreSQL</li>
      <li>Git & GitHub</li>
    </ul>
  </Container>
);

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.ABOUT);

  const renderSection = (): JSX.Element => {
    switch (currentSection) {
      case Section.ABOUT:
        return <AboutMe />;
      case Section.PORTFOLIO:
        return <Projects />;
      case Section.CONTACT:
        return <Contact />;
      case Section.RESUME:
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="app-container">
      <Header currentSection={currentSection} setSection={setCurrentSection} />
      <Container>{renderSection()}</Container>
      <Footer />
    </div>
  );
};

export default App;
