import { useRouter } from "next/router";
import { IconButton } from "../../common/iconButton";
import { ChatIcon, FriendsIcon, SettingIcon } from "../../icons";
import { Wrapper } from "./Menu.styled";

export const Menu = () => {
  const router = useRouter();
  const checkIsFilled = (href) => router.pathname === href;
  const onHandleSelectPage = (href) => () => router.push(href);
  return (
    <Wrapper>
      <IconButton
        onHandleClick={onHandleSelectPage("/friends")}
        filled={checkIsFilled("/friends")}
        Icon={FriendsIcon}
      />
      <IconButton
        onHandleClick={onHandleSelectPage("/chats")}
        filled={checkIsFilled("/chats")}
        Icon={ChatIcon}
      />
      <IconButton
        onHandleClick={onHandleSelectPage("/settings")}
        filled={checkIsFilled("/settings")}
        Icon={SettingIcon}
      />
    </Wrapper>
  );
};
