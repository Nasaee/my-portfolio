import { styled } from 'styled-components';

const Style = styled.div`
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
    font-size: 2.5rem;
    color: #516f8b;
    margin-top: -5px;
  }
`;

export default Style;
