import styled from "styled-components";
import colors from "../../../constants/colors";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
export const FieldWrapper = styled.div`
  width: 100%;
  border-bottom: 3px solid ${colors.primary};
  padding: 20px;
`;
export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  overflow: auto;
  border-bottom: 3px solid ${colors.primary};
`;
