import { styled } from 'styled-components';

const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  padding-top: 3rem;
  background: var(--color-blog);
  transform: translateX(100%);
  transition: 0.4s ease-in-out;
  opacity: 0.6;
  z-index: 1000;

  &.active {
    transform: translateX(0);
    opacity: 1;
  }

  .close-btn {
    background: transparent;
    margin-left: 4rem;
    transition: 0.35s ease-in-out;

    svg {
      width: 3rem;
      height: 3rem;
      font-size: 3rem;
      color: var(--title-color);
    }
  }

  .close-btn:hover {
    transform: scale(1.1);
  }

  .title-container {
    text-align: center;
    margin-bottom: 4rem;

    .title {
      display: inline-block;
      text-transform: uppercase;
      color: var(--title-color);
      font-size: 2rem;
      letter-spacing: 5px;
      padding: 5px 0;
      position: relative;
    }

    .title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: var(--gradient-text);
      transition: var(--transition);
    }
  }

  .center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 3rem;
    display: grid;
    gap: 2rem;

    .certificate {
      background: #fff;
      display: block;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-1);
      transition: var(--transition);
    }

    .certificate:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-4);
    }

    .certificate .img {
      height: 15rem;
      border-top-right-radius: var(--border-radius);
      border-top-left-radius: var(--border-radius);
    }

    .certificate h5 {
      font-size: 1rem;
      color: var(--color-blog);
      font-weight: 800;
      letter-spacing: 2px;
      text-align: center;
      padding: 1rem 0;
      background: #e6e8eb;
    }
  }

  @media (min-width: 768px) {
    .center {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Style;
