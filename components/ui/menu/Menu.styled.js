import styled from "styled-components";
import colors from "../../../constants/colors";

export const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.dark};
`;
