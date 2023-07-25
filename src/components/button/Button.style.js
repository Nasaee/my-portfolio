import { styled } from 'styled-components';

export const BaseButton = styled.div`
  display: flex;
  align-items: center;

  a {
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    letter-spacing: 1.5px;
    text-align: center;
    color: var(--menu-color);
    border-radius: var(--border-radius);
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
`;
