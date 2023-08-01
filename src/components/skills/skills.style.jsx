import { styled } from 'styled-components';

const Section = styled.section`
  background: var(--color-blog);
  padding: var(--section-padding);

  .content {
    display: flex;
    gap: 3rem;

    .img-container {
      img {
        width: 35rem;
      }
    }

    ul.skills-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      place-items: center;
      gap: 4rem;
      padding: 0 3rem;

      li {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-radius: var(--border-radius);
        transition: var(--transition);

        .skill-img-container {
          img {
            width: 5rem;
            height: auto;
            margin-bottom: 1rem;
          }
          p {
            color: var(--title-color);
            font-family: Paprika;
            font-size: 0.8rem;
            text-align: center;
            letter-spacing: var(--letter-spacing);
          }
        }
      }

      li:hover {
        transform: scale(1.2);
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export default Section;
