import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  position: ${(props) => (props.isOpen ? "absolute" : "inherit")};
  z-index: ${(props) => (props.isOpen ? "2" : "1")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  animation-timing-function: cubic-bezier(
    ${(props) =>
      !props.isOpen ? "0.455, 0.03, 0.515, 0.955" : "1,-0.24, 0, 1.25"}
  );
  animation-name: ${(props) => (!props.isOpen ? "closeForm" : "popForm")};
  animation-delay: 0s;
  animation-duration: 0.8s;
  animation-fill-mode: backwards;
  @keyframes popForm {
    0% {
      transform: translateY(-200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @keyframes closeForm {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    100% {
      transform: translateY(400px);
      opacity: 0;
    }
  }
`;
