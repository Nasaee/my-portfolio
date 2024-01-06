import { styled } from 'styled-components';

const Section = styled.section`
  padding: var(--section-padding);
  background: var(--background-color);

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .call-to-action-container {
    display: inline-block;
    background: #363d46;
    padding: 4rem 2rem;
    min-width: 30rem;
    height: 15rem;
    border-radius: 5px;
    border-bottom-right-radius: 100px;
    margin-bottom: 3rem;
    transform: translateY(-1rem);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);

    p.call-to-action-text {
      display: inline-block;
      right: -50%;
      transform: translateX(-50%);
      font-size: 2rem;
      font-weight: 800;
      font-family: var(--title-font);
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      text-align: center;
      margin-bottom: 2rem;
      background-image: linear-gradient(
        to right,
        #6758c5,
        #ae67fa,
        #f49867,
        #6758c5
      );
      background-size: auto auto;
      background-clip: border-box;
      background-size: 200% auto;
      color: #fff;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: textclip 2s linear infinite;
      position: relative;
      z-index: 10;
    }

    @keyframes textclip {
      to {
        background-position: -200% center;
      }
    }

    p.call-to-action-text::before {
      position: absolute;
      content: '';
      width: 15px;
      height: 15px;
      top: -8px;
      left: -40px;

      border-top: 2px solid #ff8787;
      border-left: 2px solid #ff8787;
    }

    p.call-to-action-text::after {
      position: absolute;
      content: '';
      width: 15px;
      height: 15px;
      bottom: -8px;
      right: -40px;

      border-bottom: 2px solid #ff8787;
      border-right: 2px solid #ff8787;
    }

    .cta-btn {
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: var(--border-radius);
      overflow: hidden;
      animation: inflate 2s ease-in-out infinite;

      @keyframes inflate {
        0% {
          transform: scale(1.08);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.08);
        }
      }

      a {
        display: block;
        width: 140px;
        height: 40px;
        line-height: 40px;
        letter-spacing: 1.5px;
        text-align: center;
        color: var(--menu-color);

        overflow: hidden;
        position: relative;

        span {
          display: block;
          font-size: 1.2rem;
          width: 100%;
          height: 100%;
          font-weight: 800;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: var(--transition);
          z-index: 3;
        }

        &::before {
          content: '';
          background: var(--button-color);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
        }

        &::after {
          content: '';
          background: var(--gradient-text);
          position: absolute;
          width: 0;
          height: 100%;
          top: 0;
          left: 0;
          transition: var(--transition);
          z-index: 2;
        }

        &:hover span {
          color: var(--background-color);
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 638px) {
    .call-to-action-container {
      min-width: 24rem;

      p.call-to-action-text {
        font-size: 1.4rem;
      }
    }
  }
`;

export default Section;
