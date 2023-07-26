import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: none;

  .icon-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    width: 90%;
    margin: 0 auto;

    button {
      background: transparent;
      transition: var(--transition);

      &:hover {
        transform: scale(1.1);
      }
    }

    svg {
      width: 50px;
      height: 50px;
      color: var(--menu-color);
    }
  }

  .menu-lists {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background: var(--menu-bg-color);
    transform: translateX(100%);
    transition: var(--transition);

    button {
      position: absolute;
      background: transparent;
      padding: 1.5rem;

      svg {
        width: 40px;
        height: 40px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      margin-top: 7rem;
      padding: 0 3rem;

      li {
        display: inline-block;
        margin-top: 1rem;

        a {
          display: flex;
          align-items: center;
          /* margin-left: 2rem; */
          justify-content: center;
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--background-color);
          letter-spacing: var(--letter-spacing);

          .link-content {
            width: 15rem;
          }

          svg {
            width: 2rem;
            height: 2rem;
          }

          span {
            margin-left: 2rem;
            transition: var(--transition);
            position: relative;
          }

          span::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 0;
            width: 0;
            height: 3px;
            background: var(--gradient-text);
            transition: var(--transition);
          }
        }

        a:hover span {
          letter-spacing: 5px;
        }

        a:hover span::after {
          width: 100%;
        }
      }
    }
  }

  .menu-lists.show-menu {
    transform: translateX(0);
  }

  @media screen and (max-width: 1024px) {
    & {
      display: flex;
    }

    .menu-lists {
      width: 40vw;
      height: 100vh;
    }
  }

  @media screen and (max-width: 927px) {
    .menu-lists {
      width: 100vw;
      height: 100vh;
    }
  }
`;

export default Wrapper;
