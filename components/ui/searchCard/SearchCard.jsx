import { SearchFiled } from "../searchField";
import { FieldWrapper, List, Wrapper } from "./SearchCard.styled";

export const SearchCard = () => {
  return (
    <Wrapper>
      <FieldWrapper>
        <SearchFiled />
      </FieldWrapper>
      <List></List>
    </Wrapper>
  );
};
