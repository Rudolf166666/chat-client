import styled, { css } from "styled-components";
import colors from "../../../constants/colors";

export const Button = styled.button`
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: inherit;
  border: 2px solid ${colors.primary};
  transition: 0.3s;
  svg {
    width: 30px;
    height: 30px;
    stroke: ${colors.primary};
    fill: ${colors.primary};
    z-index: 2;
    transition: 0.3s;
  }
  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    z-index: 2;
    border-radius: inherit;
    transform: scale(0);
    background-color: ${colors.primary};
    transition: 0.3s cubic-bezier(0.355, 0.525, 0.855, 0.226);
  }
  :hover {
    ::before {
      transform: scale(1);
    }
    svg {
      fill: #fff;
      stroke: #fff;
    }
  }
  ${(props) =>
    props.filled &&
    css`
      ::before {
        transform: scale(1);
      }
      svg {
        fill: #fff;
        stroke: #fff;
      }
    `}
`;
