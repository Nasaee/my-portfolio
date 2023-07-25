import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1000;

  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    width: 90%;
    margin: 0 auto;
    padding: 1rem;

    .logo-container {
      display: flex;
      align-items: center;

      a {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        background: var(--gradient-text);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    nav-links-container {
    }

    ul.links {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      li {
        a {
          display: inline-block;
          padding: 1rem 2rem;
          font-size: 1rem;
          letter-spacing: var(--letter-spacing);
          text-transform: uppercase;
          font-weight: 600;
          color: var(--menu-color);
          position: relative;
          transition: var(--transition);
        }

        a::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          /* width: 60%; */
          width: 0;
          height: 1.5px;
          background: var(--gradient-text);
          transition: var(--transition);
        }

        a:hover {
          transform: scale(1.1);
        }

        a.active {
          transform: scale(1.1);
          &::after {
            width: 60%;
          }
        }
      }
    }
  }
`;

export default Nav;
