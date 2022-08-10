import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import colors from "../../../constants/colors";
import { useNotification } from "../../../hooks/useNotification";
import { updateUserInfo } from "../../../redux/user/slice";
import { useLoginMutation } from "../../../redux/user/userAip";
import { Button } from "../../common/button";
import { Input } from "../../common/input";
import { Wrapper } from "../Form.styled";
import {
  LoginWrapper,
  InputWrapper,
  ButtonWrapper,
  TextInfo,
} from "./Login.styled";

export const LoginForm = ({ onHandleOpenForm }) => {
  const [login] = useLoginMutation();
  const { openNotification, MESSAGE_TYPES } = useNotification();
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onHandleChangeData =
    (val) =>
    ({ target }) =>
      setData((prev) => ({ ...prev, [val]: target.value }));

  const onHandleLogin = () => {
    return new Promise((res, rej) => {
      try {
        res(login(data).unwrap());
      } catch (error) {
        rej(error);
      }
    })
      .then((res) => {
        dispatch(updateUserInfo(res.user));
        localStorage.setItem("access_token", res.accessToken);
        localStorage.setItem("refresh_token", res.refreshToken);
        openNotification("You successful register", MESSAGE_TYPES.SUCCESS);
        router.push("/chats");
      })
      .catch((err) => openNotification(err.data.message, MESSAGE_TYPES.ERROR));
  };
  return (
    <Wrapper>
      <LoginWrapper>
        <InputWrapper>
          <Input
            pressedColor={colors.secondary}
            value={data.email}
            title="Email"
            onHandleChangeValue={onHandleChangeData("email")}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            pressedColor={colors.secondary}
            value={data.password}
            title="Password"
            onHandleChangeValue={onHandleChangeData("password")}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button
            onHandleClick={onHandleLogin}
            color={colors.secondary}
            title="Log in "
          />
        </ButtonWrapper>
        <TextInfo>
          {"Oh, did you forgot you haven't registered yet? Don't worry"}, click
          on <span onClick={onHandleOpenForm("registration")}>register</span>
        </TextInfo>
      </LoginWrapper>
    </Wrapper>
  );
};
