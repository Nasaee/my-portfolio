import Button from '../button/Button';
import Nav from './Navbar.style';
import { navigationLinks } from '../../data';

const Navbar = () => {
  return (
    <Nav>
      <div className='nav-center'>
        <div className='icon-container'>
          <a href='#'>NASAEE.DEV</a>
        </div>
        <div className='nav-links-container'>
          <ul className='links'>
            {navigationLinks.map((link) => {
              const { htmlID, id, text } = link;
              return (
                <li key={id}>
                  <a href={`#${htmlID}`}>{text}</a>
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
