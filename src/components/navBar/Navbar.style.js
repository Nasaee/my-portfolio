import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;

  .nav-container {
    transition: var(--transition);
    flex-direction: row;
  }

  .scrolled {
    background-color: #1d242f;
  }

  .nav-center {
    margin: 0 auto;
    width: 90%;
    padding: 1rem 0.8rem;
    display: flex;
    /* display: none; */

    justify-content: space-between;
    align-items: center;

    .logo-container {
      display: flex;
      align-items: center;

      .logo {
        display: inline-block;
        font-size: 1.5rem;
        font-weight: 700;
      }
    }

    .nav-links {
      display: flex;
      width: 60%;
      justify-content: center;
      align-items: center;
      justify-content: space-around;

      .nav-link-box {
        position: relative;

        a {
          display: block;
          color: var(--menu-color);
          text-transform: uppercase;
          font-weight: 500;
          padding: 1rem 0;
          letter-spacing: var(--letter-spacing);
          transition: var(--transition);
        }

        .underline {
          width: 0;
          height: 3px;
          background: var(--gradient-text);
          position: absolute;
          bottom: 5px;
          left: 0;
          bottom: 0;
          transition: var(--transition);
        }
      }

      .nav-link-box.active .underline {
        width: 100%;
      }

      .nav-link-box.active a {
        transform: scale(1.1);
      }
    }
  }
`;

export default Nav;
