import { styled } from 'styled-components';

const Style = styled.div`
  background-color: #1d3347;
  min-width: 18rem;
  padding: 2rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius);
  transition: var(--transition);
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    color: #687784;
    transition: var(--transition);

    p {
      margin-bottom: 1rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: #fa5252;
    }
  }

  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 18px 25px rgba(0, 0, 0, 0.2);

    a {
      color: var(--title-color);
    }
  }
`;

export default Style;
