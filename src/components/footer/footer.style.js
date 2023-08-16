import { styled } from 'styled-components';

const Style = styled.footer`
  padding: 4rem 2rem;
  background-color: #1d242f;
  ul.socials {
    display: flex;
    justify-content: center;
    gap: 3rem;
    padding: 1.5rem;

    li a svg {
      width: 30px;
      height: 30px;
      color: #82868c;
      transition: var(--transition);
    }

    li a svg:hover {
      transform: scale(1.3);
      color: #cdced1;
    }
  }

  .underline {
    width: 50%;
    margin: 0 auto;
    border-bottom: 1px solid #b4b6ba;
  }

  .copyright-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 1.5rem;
    color: #b4b6ba;
    letter-spacing: 2px;
    font-weight: 500;
  }
`;

export default Style;
