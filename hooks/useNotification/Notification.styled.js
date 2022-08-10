import styled from "styled-components";

export const Timer = styled.div`
  bottom: 0%;
  left: 0px;
  position: absolute;
  height: 4px;
  border-radius: inherit;
  background-color: #fff;
  animation-duration: 7s;
  animation-delay: 0s;
  animation-name: timerTick;
  animation-fill-mode: backwards;
  @keyframes timerTick {
    0% {
      width: 0px;
    }
    100% {
      width: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  width: 320px;
  padding: 20px;
  background-color: ${(props) => props.color};
  margin-bottom: 10px;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  animation-duration: 1s;
  animation-delay: 0s;
  transform: translateX(${(props) => (props.isOpen ? "0px" : "110%")});
  animation-name: ${(props) =>
    props.isOpen ? "notificationShow" : "notificationHidden"};
  animation-fill-mode: backwards;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  p {
    color: #fff;
    font-size: 13px;
    line-height: 24px;
    font-weight: 700;
    width: 100%;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  :hover {
    ${Timer} {
      animation-play-state: paused;
    }
  }

  @keyframes notificationShow {
    0% {
      transform: translateX(110%);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes notificationHidden {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(110%);
    }
  }
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: 10px;
  background-color: inherit;
  svg {
    min-width: 20px;
    min-height: 20px;
    fill: #fff;
    stroke: #fff;
  }
`;
