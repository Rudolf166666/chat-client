import { Button } from "./IconButton.styled";

export const IconButton = ({ Icon, onHandleClick, filled }) => {
  return (
    <Button filled={filled} onClick={onHandleClick}>
      <Icon />
    </Button>
  );
};
