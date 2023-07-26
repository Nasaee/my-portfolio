import { useGlobalContext } from '../../context';
import Wrapper from './menu.style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navigationLinks } from '../../data';
import { GrClose } from 'react-icons/gr';

const Menu = () => {
  const { isMenuOpen, closeMenu, openMenu, handleClickLink } =
    useGlobalContext();

  const handleClick = (e, htmlID) => {
    e.preventDefault();
    closeMenu();
    handleClickLink(htmlID);
  };

  return (
    <Wrapper>
      <div className='icon-container'>
        <button type='button' onClick={() => openMenu()}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div className={`menu-lists ${isMenuOpen ? 'show-menu' : ''}`}>
        <button type='button' onClick={() => closeMenu()}>
          <GrClose />
        </button>
        <ul>
          {navigationLinks.map((link) => {
            const { htmlID, id, text, icon } = link;
            return (
              <li key={id} onClick={(e) => handleClick(e, htmlID)}>
                <a className='link' href={htmlID}>
                  <div className='link-content'>
                    {icon}
                    <span>{text}</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};
export default Menu;
