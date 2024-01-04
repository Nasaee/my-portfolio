import { styled } from 'styled-components';

const Section = styled.section`
  padding: var(--section-padding);
  min-height: 100vh;

  .projects-center {
    margin: 0 auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));

    column-gap: 2rem;
    row-gap: 3rem;
  }
`;

export default Section;
