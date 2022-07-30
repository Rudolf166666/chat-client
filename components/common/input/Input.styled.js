import styled from "styled-components";

export const Title = styled.p`
  width: 100%;
  text-align: left;
  color: ${(props) => (props.isPressed ? props.pressedColor : "#fff")};
  position: absolute;
  font-size: ${(props) => (props.isPressed ? "18px" : "14px")};
  bottom: ${(props) => (props.isPressed ? "3px" : "30px")};
  transition: 0.5s cubic-bezier(0.09, 1.47, 0.72, 1.06);
`;
export const InputField = styled.input`
  outline: none;
  border: none;
  position: relative;
  border-bottom: 3px solid ${(props) => props.pressedColor};
  background: inherit;
  width: 100%;
  color: #fff;
  transition: 0.5s;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 50px;
  ::before {
    width: 100%;
    left: 0px;
    content: "";
    position: absolute;
    border-bottom: 3px solid #fff;
    z-index: 2;
    transition: 0.2s ease-in;
    transform: scaleX(${(props) => (props.isPressed ? "0" : "1")});
  }
`;
