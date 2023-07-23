import { useState, useEffect } from 'react';
import Nav from './Navbar.style';
import Button from '../button/Button';
import Menu from '../menu/Menu';
// import BUTTON_TYPE_CLASSES from '../../utils/button_type_classes';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Nav>
      <div className={`'nav-container' ${scrolled ? 'scrolled' : ''}`}>
        <div className='nav-center'>
          <div className='logo-container'>
            <a href='#' className='logo gradient__text'>
              NASAEE.DEV
            </a>
          </div>
          <div className='nav-links'>
            <div
              className={`nav-link-box ${
                activeLink === 'home' ? 'active' : ''
              }`}
            >
              <a href='#home' onClick={() => onUpdateActiveLink('home')}>
                Home
              </a>
              <div className='underline'></div>
            </div>
            <div
              className={`nav-link-box ${
                activeLink === 'skills' ? 'active' : ''
              }`}
            >
              <a href='#skills' onClick={() => onUpdateActiveLink('skills')}>
                Skills
              </a>
              <div className='underline'></div>
            </div>
            <div
              className={`nav-link-box ${
                activeLink === 'projects' ? 'active' : ''
              }`}
            >
              <a
                href='#projects'
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </a>
              <div className='underline'></div>
            </div>
            <div
              className={`nav-link-box ${
                activeLink === 'about-me' ? 'active' : ''
              }`}
            >
              <a
                href='#about-me'
                onClick={() => onUpdateActiveLink('about-me')}
              >
                About Me
              </a>
              <div className='underline'></div>
            </div>
            <div
              className={`nav-link-box ${
                activeLink === 'contact' ? 'active' : ''
              }`}
            >
              <a href='#contact' onClick={() => onUpdateActiveLink('contact')}>
                Contact
              </a>
              <div className='underline'></div>
            </div>
          </div>
          <Button type='button' onClick={() => console.log('navbutton click')}>
            <span className='button-text'>Hire Me</span>
          </Button>
        </div>
        <Menu />
      </div>
    </Nav>
  );
};
export default NavBar;
