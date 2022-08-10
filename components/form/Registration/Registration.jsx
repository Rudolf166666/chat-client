import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import colors from "../../../constants/colors";
import { useNotification } from "../../../hooks/useNotification";
import { updateUserInfo } from "../../../redux/user/slice";
import { useRegistrationMutation } from "../../../redux/user/userAip";
import { Button } from "../../common/button";
import { Input } from "../../common/input";
import { Wrapper } from "../Form.styled";
import {
  RegistrationWrapper,
  InputWrapper,
  ButtonWrapper,
  TextInfo,
} from "./Registration.styled";

export const RegistrationForm = ({ onHandleOpenForm }) => {
  const [register] = useRegistrationMutation();
  const { openNotification, MESSAGE_TYPES } = useNotification();
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const onHandleChangeData =
    (val) =>
    ({ target }) =>
      setData((prev) => ({ ...prev, [val]: target.value }));

  const onHandleRegister = () => {
    return new Promise((resolve, reject) => {
      try {
        resolve(register(data).unwrap());
      } catch (error) {
        reject(error);
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
      <RegistrationWrapper>
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
            value={data.fullName}
            title="Full name"
            onHandleChangeValue={onHandleChangeData("fullName")}
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
            onHandleClick={onHandleRegister}
            color={colors.secondary}
            title="Create account"
          />
        </ButtonWrapper>
        <TextInfo>
          {"Oh, did you forget that you have already registered? Don't worry"},
          click on <span onClick={onHandleOpenForm("login")}>login</span>
        </TextInfo>
      </RegistrationWrapper>
    </Wrapper>
  );
};
