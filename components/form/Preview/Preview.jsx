import { useState } from "react";
import { LoginIcon, RegistrationIcon } from "../../icons";
import { Wrapper } from "../Form.styled";
import {
  LoginPart,
  RegistrationPart,
  PathsWrapper,
  InfoRow,
  Button,
} from "./Preview.styled";

export const PreviewForm = ({ onHandleOpenForm }) => {
  const [selectedForm, setSelectedForm] = useState(null);
  return (
    <Wrapper>
      <PathsWrapper>
        <LoginPart>
          <LoginIcon />
          <InfoRow>Log in to your account!</InfoRow>
          <Button onClick={onHandleOpenForm("login")}>Login</Button>
        </LoginPart>

        <RegistrationPart>
          <RegistrationIcon />
          <InfoRow>Register a new account!</InfoRow>
          <Button onClick={onHandleOpenForm("registration")}>
            Registration
          </Button>
        </RegistrationPart>
      </PathsWrapper>
    </Wrapper>
  );
};
