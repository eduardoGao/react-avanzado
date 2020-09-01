import styled, { css } from "styled-components";
import { animateMenu } from "../../styles/animation"

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
  {
    ${animateMenu()};
    background: rgba(255, 255, 255, 0.85);
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    right: 0;
    top: 10px;
    margin: 0 auto;
    max-width: 500px;
    padding: 5px;
    /* transform: scale(.6); */
    z-index: 1;
    overflow: hidden;
  }
  `}

  &.fixed 
`

export const Item = styled.li`
  padding: 0 8px;
`