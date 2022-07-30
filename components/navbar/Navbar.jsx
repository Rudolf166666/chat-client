import { Menu } from "../ui/menu";
import { SearchCard } from "../ui/searchCard";
import { Wrapper, CardWrapper } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <SearchCard />
      </CardWrapper>
      <Menu />
    </Wrapper>
  );
};
