import { useState } from "react";
import colors from "../../../constants/colors";
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
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onHandleChangeData =
    (val) =>
    ({ target }) =>
      setData((prev) => ({ ...prev, [val]: target.value }));
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
          <Button color={colors.secondary} title="Log in " />
        </ButtonWrapper>
        <TextInfo>
          {"Oh, did you forgot you haven't registered yet? Don't worry"}, click
          on <span onClick={onHandleOpenForm("registration")}>register</span>
        </TextInfo>
      </LoginWrapper>
    </Wrapper>
  );
};
