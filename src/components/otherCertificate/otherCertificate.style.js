import { styled } from 'styled-components';

const Style = styled.div`
  background: #1d3347;
  min-width: 18rem;
  padding: 2rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius);
  transition: var(--transition);

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
    color: #687784;
    background: transparent;
    transition: var(--transition);
    margin: 0 auto;

    p {
      margin-bottom: 1rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: #9ba4ad;
      transition: var(--transition);
    }
  }

  &:hover {
    transform: scale(1.06);
    box-shadow: 0px 18px 25px rgba(0, 0, 0, 0.2);

    button {
      color: var(--title-color);
      svg {
        color: var(--title-color);
      }
    }
  }
`;
export default Style;
