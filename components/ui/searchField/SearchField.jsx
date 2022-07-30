import { useRef, useState } from "react";
import { SearchIcon } from "../../icons";
import { Wrapper, Field, IconWrapper } from "./SearchField.styled";

export const SearchFiled = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const onHandleOpen = () => {
    setIsOpen(true);
    ref.current.focus();
  };
  const onHandleBlur = () => {
    setIsOpen(!!value);
  };
  return (
    <Wrapper onClickCapture={onHandleOpen} isOpen={isOpen}>
      <Field isOpen={isOpen} value={value} ref={ref} onBlur={onHandleBlur} />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </Wrapper>
  );
};
