import { styled } from 'styled-components';

const Section = styled.section`
  padding: var(--section-padding);
  min-height: 100vh;

  .projects-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Section;
