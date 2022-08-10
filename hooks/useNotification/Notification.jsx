import { useEffect, useState } from "react";
import { CloseIcon } from "../../components/icons";
import { Wrapper, Timer, CloseButton } from "./Notification.styled";

export const Notification = ({ message, onClose, color }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const onTimerHandleAnimationEnd = () => {
    setIsOpen(false);
  };
  const onHandleAnimationEnd = () => {
    if (!isOpen) setIsVisible(false);
  };
  const onHandleCloseNotification = () => setIsOpen(false);
  useEffect(() => {
    if (!isVisible) onClose();
  }, [isVisible]);
  return (
    <>
      {isVisible && (
        <Wrapper
          color={color}
          onAnimationEnd={onHandleAnimationEnd}
          isOpen={isOpen}
        >
          <p>{message}</p>
          <Timer onAnimationEnd={onTimerHandleAnimationEnd} />
          <CloseButton onClick={onHandleCloseNotification}>
            <CloseIcon />
          </CloseButton>
        </Wrapper>
      )}
    </>
  );
};
