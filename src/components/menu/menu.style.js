import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: none;

  .icon-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    width: 90%;
    margin: 0 auto;

    svg {
      width: 50px;
      height: 50px;
      color: var(--menu-color);
    }
  }

  @media screen and (max-width: 1024px) {
    & {
      display: block;
    }
  }
`;

export default Wrapper;
