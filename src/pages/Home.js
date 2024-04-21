import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';
import Bio from '../components/Bio/Bio';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const Home = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [navBg, setNavBg] = useState('transparent');

  const onClick = (e) => {
    if (e.target.id === 'home')
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    if (e.target.id === 'projects')
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    if (e.target.id === 'contact')
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const introDivHeight = document.getElementById('bio').offsetHeight;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > introDivHeight) {
        setNavBg('#6db2c7fd');
      } else {
        setNavBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header navbarColor={navBg} onClick={onClick} />
      <Bio refs={homeRef} onClick={onClick} />
      <About />
      <Projects refs={projectsRef} />
      <Contact refs={contactRef} />
    </>
  );
};

export default Home;
