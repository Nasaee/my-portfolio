import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  overflow: hidden;
  height: 15rem;
  width: 22rem;
  border-radius: var(--border-radius);

  img {
    height: 100%;
  }

  &::before {
    content: '';
    background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
    opacity: 0.85;
    position: absolute;
    width: 100%;
    height: 0;
    transition: 0.4s ease-in-out;
    z-index: 1;
  }

  .project-content {
    padding: 2rem;
    position: absolute;
    text-align: center;
    top: 65%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.5s ease-in-out;
    z-index: 10;

    h4 {
      font-family: var(--subtitle-font);
      color: #fff;
      font-size: 1.8rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 2rem;
      color: #ced4da;
      text-align: start;
    }

    .button-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      button {
        background: transparent;
        border: 1.5px solid var(--color-blog);
        border-radius: var(--border-radius);
        transition: var(--transition);

        &.see-live {
          background: var(--color-blog);
          a {
            color: #fff;
          }
        }
      }

      button a {
        display: inline-block;
        padding: 0.4rem 1rem;
        font-family: var(--subtitle-font);
        font-size: 0.7rem;
        font-weight: 800;
        color: var(--color-blog);
        letter-spacing: var(--letter-spacing);
      }

      button:hover {
        transform: scale(1.05);
      }
    }
  }

  &:hover .project-content {
    top: 50%;
    opacity: 1;
  }

  &:hover::before {
    height: 100%;
  }

  @media screen and (max-width: 808px) {
    & {
      height: 20rem;
      width: 25rem;
    }
  }
  @media screen and (max-width: 540px) {
    & {
      height: 12rem;
      width: auto;
    }

    .project-content p {
      display: none;
    }
  }
`;

export default Card;
