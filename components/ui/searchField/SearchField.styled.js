import styled from "styled-components";
import colors from "../../../constants/colors";

export const Wrapper = styled.div`
  width: ${(props) => (props.isOpen ? "100%" : "36px")};

  background-color: ${colors.primary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
export const Field = styled.input`
  width: 90%;
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
export const IconWrapper = styled.div`
  width: 36px;
  height: 100%;
  position: absolute;
  right: 0px;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    stroke: #fff;
  }
`;
