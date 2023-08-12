import { styled } from 'styled-components';

const Section = styled.section`
  background: var(--color-blog);
  padding: var(--section-padding);

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    transform: translateY(-40px);

    .img-container {
      align-self: flex-start;

      img {
        max-width: 25rem;
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            width: 5.5rem;
            height: 5.5rem;
            margin-bottom: 1rem;
          }
          p {
            display: inline-block;
            color: var(--title-color);
            font-family: Paprika;
            font-size: 0.8rem;
            text-align: center;
            letter-spacing: var(--letter-spacing);
            position: relative;
          }

          p::after {
            position: absolute;
            content: '';
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 1px;
            background: var(--gradient-text);
            transition: var(--transition);
          }
        }
      }

      li:hover {
        transform: scale(1.2);
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);

        & p::after {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1500px) {
    ul.skills-list {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }

  @media screen and (max-width: 1025px) {
    .img-container {
      display: none;
    }
  }

  @media screen and (max-width: 650px) {
    ul.skills-list {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
`;

export default Section;
