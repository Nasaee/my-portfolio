import Wrapper from './menu.style';
import { GiHamburgerMenu } from 'react-icons/gi';

const Menu = () => {
  return (
    <Wrapper>
      <div className='icon-container'>
        <GiHamburgerMenu />
      </div>
      <ul className='menu-lists'></ul>
    </Wrapper>
  );
};
export default Menu;
