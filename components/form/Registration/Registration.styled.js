import styled from "styled-components";
import colors from "../../../constants/colors";

export const RegistrationWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  background-color: ${colors.primary};
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  margin-top: auto;
`;

export const TextInfo = styled.p`
  color: #fff;
  font-size: 14px;
  margin-top: 40px;
  span {
    cursor: pointer;
    text-decoration: underline;
  }
`;
