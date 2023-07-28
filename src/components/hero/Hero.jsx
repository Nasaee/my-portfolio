import { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import Section from './hero.style';
import profileImg from '../../assets/img/profile-pic.png';
import { socials } from '../../data';
import Button from '../button/Button';

const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        '',
        'Nasa-ee',
        'Web Developer',
        'Web Designer',
        'UX/UI Designer',
      ], // Strings to display
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
    <Section id='home' className='hero'>
      <div className='hero-content' data-aos='fade-right'>
        <p className='welcome'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          WELCOME TO MY PORTFOLIO
        </p>
        <h1>
          Hi I&apos;m <span ref={typedEl}>Web Deverloper</span>
        </h1>

        <p className='intro-myself'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          nulla facilisi cras fermentum.Sit amet luctus venenatis lectus magna
          fringilla. Aliquam malesuada bibendum arcu vitae elementum curabitur
          vitae nunc sed. Suscipit adipiscing bibendum est ultricies integer.
          Purus gravida quis blandit turpis cursus in hac habitasse.
        </p>
        <ul className='socials'>
          {socials.map((social) => {
            const { icon, id, url } = social;
            return (
              <li key={id}>
                <a href={url} target='_blank' rel='noreferrer'>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='button-container'>
          <Button>HIRE ME</Button>
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
