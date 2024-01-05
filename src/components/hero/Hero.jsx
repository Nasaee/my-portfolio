import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import Section from './hero.style';
import profileImg from '../../assets/img/profile-pic.png';
import { socials } from '../../data';
import Button from '../button/Button';

const Hero = () => {
  const heroRef = useRef(null);
  const typedEl = useRef(null);

  useEffect(() => {
    const navbarEl = document.querySelector('nav');
    const navbarElHeight = navbarEl.offsetHeight;

    const observerFn = ([entry]) => {
      if (!entry.isIntersecting) {
        navbarEl.style.position = 'fixed';
      } else {
        navbarEl.style.position = 'absolute';
      }
    };
    const heroSectionObserver = new IntersectionObserver(observerFn, {
      root: null,
      threshold: 0,
      rootMargin: `${-navbarElHeight - 1}px`,
    });
    heroSectionObserver.observe(heroRef.current);

    return () => heroSectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['', 'Nasa-ee', 'Web Developer'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section id='home' className='hero' ref={heroRef}>
      <div className='hero-content' data-aos='fade-right'>
        <p className='welcome'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          WELCOME TO MY PORTFOLIO
        </p>
        <h1>
          Hi I&apos;m &nbsp;<span ref={typedEl}></span>
        </h1>

        <p className='intro-myself'>
          I graduated from the Faculty of Arabic Arts from Malaysia. My hobby is
          writing code. I like to learn new technologies and I hope to one day
          become a programmer. My skills are Javascript, Typescript, React,
          HTML, CSS. and more...
        </p>
        <ul className='socials'>
          {socials.map((social) => {
            const { icon, id, url, name } = social;
            return (
              <li key={id}>
                <a
                  href={name.toLowerCase() === 'email' ? `mailto:${url}` : url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='button-container'>
          <Button>CONTACT ME</Button>
        </div>
      </div>
      <div
        className='hero-img-container'
        data-aos='fade-left'
        data-aos-delay='900'
      >
        <img src={profileImg} alt='profile image' className='profileImg' />
      </div>
    </Section>
  );
};
export default Hero;
