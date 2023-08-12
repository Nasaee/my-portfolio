import { styled } from 'styled-components';

const Section = styled.section`
  padding: var(--section-padding);
  background: var(--color-blog);

  .personal-info-container {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    .personal-info {
      font-size: 1.2rem;
      text-transform: capitalize;
      color: var(--title-color);

      p {
        display: inline-block;
        padding: 1rem 2rem;
        letter-spacing: 1px;
        margin-bottom: 2rem;
        border-radius: 10px;
        box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
      }

      p span:first-child {
        text-transform: uppercase;
        font-weight: 800;
      }

      p span:last-child {
        font-family: Paprika;
        margin-left: 1rem;
      }
    }
  }
`;

export default Section;
