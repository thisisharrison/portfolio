import React, { useState, useEffect } from 'react';
import Toggle from './Toggle/Toggle'
import Hero from './Hero/Hero';
import About from './About/About';
import Education from './Education/Education';
import Skills from './Skills/Skills'
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider, ThemeProvider } from '../context/context';

import { heroData, aboutData, educationData, projectsData, skillsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [education, setEducation] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setEducation({...educationData});
    setSkills([...skillsData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, education, projects, contact, skills, footer }}>
      <ThemeProvider value={{ theme }}>
        <Toggle />
        <Hero />
        <About />
        <Education />
        <Projects />
        {/* <Skills /> */}
        <Contact />
        <Footer />
      </ThemeProvider>
    </PortfolioProvider>
  );
}

export default App;
