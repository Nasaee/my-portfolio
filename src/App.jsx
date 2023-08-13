import { useEffect } from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import NavBar from './components/navBar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AboutMe from './components/about-me/AboutMe';
import CertificatePage from './components/certificatePage/CertificatePage';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: 'mobile',
    });
  }, []);

  return (
    <main>
      <SkeletonTheme baseColor='#041c32' highlightColor='#1d3347'>
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <AboutMe />
        <CertificatePage />
      </SkeletonTheme>
    </main>
  );
}

export default App;
