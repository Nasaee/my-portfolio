import { styled } from 'styled-components';

const Section = styled.section`
  padding: var(--section-padding);
  min-height: 100vh;
  background: var(--color-blog);

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    margin-top: 5rem;

    .img-container {
      text-align: center;

      img {
        width: 80%;
      }
    }
    .contacts {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      a {
        display: inline-block;
        font-size: 1.5rem;
        letter-spacing: 3px;
        color: var(--menu-color);

        svg {
          font-size: 2rem;
          transform: translateY(20%);
          transition: var(--transition);
        }

        span:last-child {
          margin-left: 2rem;
          text-shadow: 0px 20px 20px #000000;
          transition: var(--transition);
        }
      }

      a.email:hover {
        color: #fa5252;
      }
      a.phone:hover {
        color: #51cf66;
      }
      a.facebook:hover {
        color: #364fc7;
      }
      a.linkIn:hover {
        color: #1864ab;
      }
    }
  }

  @media screen and (max-width: 985px) {
    .grid-container {
      grid-template-columns: 1fr 1.5fr;
      gap: 1.5rem;
    }
  }
  @media screen and (max-width: 825px) {
    & {
      min-height: auto;
    }
    .grid-container {
      grid-template-columns: 1fr;
    }

    .img-container {
      display: none;
    }

    .contacts {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 520px) {
    .contacts {
      a {
        font-size: 1rem !important;

        svg {
          font-size: 1rem !important;
        }
      }
    }
  }

  @media screen and (max-width: 430px) {
    .contacts {
      a {
        font-size: 1rem;

        svg {
          font-size: 0.8rem !important;
        }
      }
    }
  }
`;

export default Section;
