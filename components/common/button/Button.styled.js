import styled from "styled-components";

export const Btn = styled.button`
  width: 100%;
  border-radius: 50px;
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
  span {
    z-index: 3;
    font-size: 16px;
    color: #fff;
    transition: 0.5s;
    font-weight: 700;
  }
  ::before {
    width: 106%;
    height: 150%;
    background-color: transparent;
    position: absolute;
    border-radius: inherit;
    content: "";
    border: 5px solid #fff;
    transform: scale3d(1.1, 1.1, 1);
    opacity: 0;
    transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    filter: drop-shadow(0px 0px 20px #fff);
  }
  :hover {
    ::before {
      transform: scale3d(1, 1, 1);
      filter: drop-shadow(2px 4px 6px #111111);
      opacity: 1;
    }
  }
`;
