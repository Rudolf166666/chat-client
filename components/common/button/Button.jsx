import { Btn } from "./Button.styled";

export const Button = ({ color, title, onHandleClick }) => {
  return (
    <Btn color={color} onClick={onHandleClick}>
      <span>{title}</span>
    </Btn>
  );
};
