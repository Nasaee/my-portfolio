import { styled } from 'styled-components';

const Style = styled.div`
  .switch {
    display: inline-block;
    width: 60px;
    height: 30px;
    margin: 4px;
    position: relative;

    input {
      display: none;
    }

    .slider {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 30px;
      box-shadow: 0 0 0 2px #777, 0 0 4px #777;
      cursor: pointer;
      overflow: hidden;
      transition: 0.2s;
    }

    .slider-text {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: limeGreen;
      font-weight: 600;
      border-radius: 30px;
      transform: translateX(-30px);
      transition: 0.2s;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        padding: 0 8.5px;
        color: black;
        font-size: 0.8rem;
        text-transform: uppercase;
      }
    }

    input:checked + .slider .slider-text {
      transform: translateX(30px);
      justify-content: flex-start;
    }
  }
`;

export default Style;

// .switch input
// {
//   display: none;
// }

// .switch
// {
//   display: inline-block;
//   width: 60px; /*=w*/
//   height: 30px; /*=h*/
//   margin: 4px;
//   transform: translateY(50%);
//   position: relative;
// }

// .slider
// {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   border-radius: 30px;
//   box-shadow: 0 0 0 2px #777, 0 0 4px #777;
//   cursor: pointer;
//   border: 4px solid transparent;
//   overflow: hidden;
//   transition: 0.2s;
// }

// .slider:before
// {
//   position: absolute;
//   content: "";
//   width: 100%;
//   height: 100%;
//   background-color: #777;
//   border-radius: 30px;
//   transform: translateX(-30px); /*translateX(-(w-h))*/
//   transition: 0.2s;
// }

// input:checked + .slider:before
// {
//   transform: translateX(30px); /*translateX(w-h)*/
//   background-color: limeGreen;
// }

// input:checked + .slider
// {
//   box-shadow: 0 0 0 2px limeGreen, 0 0 8px limeGreen;
// }
