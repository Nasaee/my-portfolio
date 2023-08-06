import { styled } from 'styled-components';

const Section = styled.section`
  padding: var(--section-padding);
  min-height: 100vh;

  .projects-center {
    margin: 0 auto;
    max-width: var(--max-width);
    display: grid;
    place-items: center;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1265px) {
    .projects-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 808px) {
    .projects-center {
      grid-template-columns: 1fr;
    }
  }
`;

export default Section;
