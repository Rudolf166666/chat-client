import styled from "styled-components";
import colors from "../../../constants/colors";

export const PathsWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
`;
export const InfoRow = styled.p`
  position: absolute;
  color: #fff;
  font-weight: 900;
  transition: 0.4s cubic-bezier(1, -0.24, 0, 1.25);
`;
export const Button = styled.button`
  background-color: green;
  color: #fff;
  padding: 12px;
  width: 100%;
  max-width: 150px;
  font-size: 20px;
  border-radius: 5px;
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
`;
export const LoginPart = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 65%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 0px 0px 500px 0px;
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  ${InfoRow} {
    transform: translateX(-350px);
    font-size: 26px;
    margin-top: 30px;
  }
  ${Button} {
    opacity: 0;
    position: absolute;
    top: 20%;
    right: 30%;
    background-color: ${colors.secondary};
    :hover {
      transform: translateY(-10px);
    }
  }
  svg {
    transition: 0.4s;
    width: 50px;
    height: 50px;
    fill: #fff;
  }
  :hover {
    width: 120%;
    height: 120%;
    z-index: 2;
    svg {
      transform: scale(4) translate(-40px, -40px);
      position: absolute;
    }
    ${InfoRow} {
      transform: translateX(-80px);
    }
    ${Button} {
      opacity: 1;
    }
  }
`;

export const RegistrationPart = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 65%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 500px 0px 0px 0px;
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  ${InfoRow} {
    transform: translateX(350px);
    font-size: 26px;
    margin-bottom: 30px;
  }
  ${Button} {
    opacity: 0;
    position: absolute;
    bottom: 20%;
    left: 30%;
    background-color: ${colors.primary};
    :hover {
      transform: translateY(-10px);
    }
  }
  svg {
    transition: 0.4s;
    width: 50px;
    height: 50px;
    fill: #fff;
  }
  :hover {
    width: 120%;
    height: 120%;
    z-index: 2;
    svg {
      transform: scale(4) translate(40px, 40px);
      position: absolute;
    }
    ${InfoRow} {
      transform: translateX(80px);
    }
    ${Button} {
      opacity: 1;
    }
  }
`;
