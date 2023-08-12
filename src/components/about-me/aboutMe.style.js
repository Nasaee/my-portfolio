import { styled } from 'styled-components';

const Section = styled.section`
  padding: var(--section-padding);
  background: var(--color-blog);

  .personal-info-container {
    width: 90%;
    margin: 0 auto 2.5rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    .personal-info {
      font-size: 1.2rem;
      text-transform: capitalize;
      color: var(--title-color);

      p {
        display: block;
        padding: 1rem 2rem;
        letter-spacing: 1px;
        margin-bottom: 2rem;
        border-radius: 10px;
        box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);

        span {
          line-height: 2rem;
        }
      }

      p span:first-child {
        text-transform: uppercase;
        font-weight: 800;
      }

      p span:last-child {
        font-family: Paprika;
        margin-left: 1rem;
        letter-spacing: 2px;
      }
    }
  }

  .img-container {
    justify-self: center;

    img {
      max-width: 25rem;
    }
  }

  .document-links {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
  }

  @media screen and (max-width: 1148px) {
    .personal-info-container {
      grid-template-columns: 1fr;
    }
    .document-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 880px) {
    .personal-info p span {
      font-size: 0.9rem;
    }
    .img-container img {
      max-width: 15rem;
    }

    .document-links {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  @media screen and (max-width: 480px) {
    & {
      padding: 3.5rem 2rem;
    }
    .personal-info p {
      padding: 1rem !important;
    }

    .personal-info p span {
      font-size: 0.8rem;
    }

    .personal-info p span:last-child {
      margin-left: 0 !important;
    }

    .img-container {
      display: none;
    }
  }
`;

export default Section;
