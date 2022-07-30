import { useState } from "react";
import colors from "../../../constants/colors";
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
  const [data, setData] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const onHandleChangeData =
    (val) =>
    ({ target }) =>
      setData((prev) => ({ ...prev, [val]: target.value }));
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
          <Button color={colors.secondary} title="Create account" />
        </ButtonWrapper>
        <TextInfo>
          {"Oh, did you forget that you have already registered? Don't worry"},
          click on <span onClick={onHandleOpenForm("login")}>login</span>
        </TextInfo>
      </RegistrationWrapper>
    </Wrapper>
  );
};
