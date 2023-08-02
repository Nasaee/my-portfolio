import Button from '../button/Button';
import Nav from './Navbar.style';
import { navigationLinks } from '../../data';
import Menu from '../menu/Menu';
import { useGlobalContext } from '../../context';

const Navbar = () => {
  const { activeLink, handleClickLink } = useGlobalContext();

  return (
    <Nav data-aos='fade-down'>
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
        <Button linkToGo={'contact-me'}>HIRE ME</Button>
      </div>
      <Menu />
    </Nav>
  );
};
export default Navbar;
