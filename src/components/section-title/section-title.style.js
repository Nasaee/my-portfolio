import { styled } from 'styled-components';

const Style = styled.div`
  margin-bottom: 6rem;
  .title {
    font-family: var(--title-font);
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--title-color);
  }
  .subtitle {
    font-family: var(--subtitle-font);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 2rem;
    color: var(--main-color);
    margin-top: -5px;
  }
`;

export default Style;
