import { useGlobalContext } from '../../context';
import Wrapper from './menu.style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navigationLinks } from '../../data';
import { AiOutlineClose } from 'react-icons/ai';

const Menu = () => {
  const { isMenuOpen, closeMenu, openMenu } = useGlobalContext();

  return (
    <Wrapper>
      <div className='icon-container'>
        <button type='button' onClick={() => openMenu()}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div className={`menu-lists ${isMenuOpen ? 'show-menu' : ''}`}>
        <button type='button' onClick={() => closeMenu()}>
          <AiOutlineClose />
        </button>
        <ul>
          {navigationLinks.map((link) => {
            const { htmlID, id, text, icon } = link;
            return (
              <li key={id}>
                <a
                  className='link'
                  href={`#${htmlID}`}
                  onClick={() => closeMenu()}
                >
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
