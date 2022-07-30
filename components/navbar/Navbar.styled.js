import styled from "styled-components";
import colors from "../../constants/colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.darkBlue};
  height: 100%;
  min-width: 320px;
`;
export const CardWrapper = styled.div`
  width: 100%;
  flex: 1;
`;
