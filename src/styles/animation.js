import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`


const animateMenuKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
    ${'' /* transform: scale(.6); */}
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    ${'' /* transform: scale(.6); */}
  }
`

export const animateMenu = ({ time = '.2s', type = 'ease' } = {}) =>
  css`animation: ${time} ${animateMenuKeyframes} ${type};`