import { styled } from 'styled-components';

const Section = styled.section`
  padding-top: var(--nav-height);
  height: 100vh;
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  .hero-content {
    padding: 3rem 6rem;

    p.welcome {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: var(--letter-spacing);
      color: var(--title-color);
      padding: 1.3rem 1.2rem;
      overflow: hidden;
      position: relative;

      span {
        position: absolute;
      }

      span:nth-child(1) {
        top: 0px;
        left: 0px;
        width: 100%;
        height: 2px;
        background-image: linear-gradient(
          to right,
          #ae67fa,
          #f49867,
          #6758c5,
          #30428a,
          #11294f,
          #040c18
        );
        animation: 2s animateTop linear infinite;
      }

      @keyframes animateTop {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      span:nth-child(2) {
        top: 0px;
        right: 0px;
        height: 100%;
        width: 2px;
        background-image: linear-gradient(
          to bottom,
          #ae67fa,
          #f49867,
          #6758c5,
          #30428a,
          #11294f,
          #040c18
        );
        animation: 2s animateRight linear -1s infinite;
      }

      @keyframes animateRight {
        0% {
          transform: translateY(100%);
        }
        100% {
          transform: translateY(-100%);
        }
      }

      span:nth-child(3) {
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 2px;
        background-image: linear-gradient(
          to left,
          #ae67fa,
          #f49867,
          #6758c5,
          #30428a,
          #11294f,
          #040c18
        );
        animation: 2s animateBottom linear infinite;
      }

      @keyframes animateBottom {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }

      span:nth-child(4) {
        top: 0px;
        left: 0px;
        height: 100%;
        width: 2px;
        background-image: linear-gradient(
          to top,
          #ae67fa,
          #f49867,
          #6758c5,
          #30428a,
          #11294f,
          #040c18
        );
        animation: 2s animateLeft linear -1s infinite;
      }

      @keyframes animateLeft {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }
    }

    h1 {
      font-size: 3.5rem;
      color: var(--title-color);
      margin-top: 3rem;
      span {
        color: var(--main-color);
      }
    }

    p {
      margin-top: 1rem;
      font-size: 1.1rem;
      letter-spacing: 1.3px;
    }

    ul.socials {
      display: flex;
      gap: 30px;
      margin-top: 2.3rem;

      li a svg {
        width: 24px;
        height: 24px;
        color: var(--title-color);
        transition: var(--transition);
      }

      li a svg:hover {
        transform: scale(1.3);
      }
    }

    .button-container {
      margin-top: 3rem;
    }
  }

  .hero-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    .profileImg {
      width: 32rem;
      height: 32rem;
      animation: updown 3s linear infinite;
    }

    @keyframes updown {
      0% {
        transform: translateY(-20px);
      }
      50% {
        transform: translateY(20px);
      }
      100% {
        transform: translateY(-20px);
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .hero-content {
      padding: 3rem;
    }
  }
  @media screen and (min-width: 1115px) and (max-width: 1307px) {
    .hero-content {
      padding: 2rem;
    }

    h1 {
      font-size: 2.2rem;
    }

    .hero-img-container {
      padding: 2rem;
    }

    .profileImg {
      width: 22rem !important;
      height: 22rem !important;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1114px) {
    & {
      /* grid-template-columns: 3fr 1fr; */
    }

    h1 {
      font-size: 3rem !important;
    }

    p.intro-myself {
      font-size: 1rem;
    }

    .profileImg {
      width: 18rem !important;
      height: 18rem !important;
    }
  }

  @media screen and (max-width: 1024px) {
    & {
      grid-template-columns: 1fr;
      height: auto;
    }

    .profileImg {
      width: 20rem !important;
      height: 20rem !important;
    }
  }
`;

export default Section;
