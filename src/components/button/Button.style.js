import { styled } from 'styled-components';

export const BaseButton = styled.button`
  display: block;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  letter-spacing: var(--letter-spacing);
  border-radius: var(--border-radius);
  font-weight: 800;
  background: var(--button-color);
  color: #fff;
  cursor: pointer;
  position: relative;
  transition: var(--transition);

  span {
    z-index: 1;
  }

  &::before {
    content: '';
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: yellow;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: black;
  }

  &:hover::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;
