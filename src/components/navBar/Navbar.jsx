import { useState } from 'react';
import Button from '../button/Button';
import Nav from './Navbar.style';
import { navigationLinks } from '../../data';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClickLink = (htmlID) => {
    setActiveLink(htmlID);
  };

  return (
    <Nav>
      <div className='nav-center'>
        <div className='logo-container'>
          <a href='#'>NASAEE.DEV</a>
        </div>
        <div className='nav-links-container'>
          <ul className='links'>
            {navigationLinks.map((link) => {
              const { htmlID, id, text } = link;
              return (
                <li key={id}>
                  <a
                    href={`#${htmlID}`}
                    onClick={() => handleClickLink(htmlID)}
                    className={activeLink === htmlID ? 'active' : ''}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <Button />
      </div>
    </Nav>
  );
};
export default Navbar;
