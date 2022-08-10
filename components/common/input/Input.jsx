import { useRef, useState } from "react";
import { InputField, Title, Wrapper } from "./Input.styled";

export const Input = ({
  title,
  value,
  onHandleChangeValue,
  pressedColor,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(!value);
  const ref = useRef();
  const onHandleFocus = () => {
    setIsPressed(false);
    ref.current.focus();
  };
  const onHandleBlur = () => {
    setIsPressed(!value);
  };
  return (
    <Wrapper
      isPressed={isPressed}
      onBlurCapture={onHandleBlur}
      onClickCapture={onHandleFocus}
    >
      <Title pressedColor={pressedColor} isPressed={isPressed}>
        {title}
      </Title>
      <InputField
        pressedColor={pressedColor}
        ref={ref}
        isPressed={isPressed}
        onChange={onHandleChangeValue}
        value={value}
        {...props}
      />
    </Wrapper>
  );
};
