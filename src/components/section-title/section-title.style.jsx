import { styled } from 'styled-components';

const Style = styled.div`
  margin-bottom: 6rem;
  .title {
    font-family: var(--title-font);
    font-size: 1.5rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--title-color);
  }
  .subtitle {
    font-family: var(--subtitle-font);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 2rem;
    color: #eef1f3;
    margin-top: -5px;
  }
`;

export default Style;
