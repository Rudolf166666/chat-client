import { useState } from "react";
import { LoginForm, PreviewForm, RegistrationForm } from "../../form";
import { Wrapper, FormWrapper } from "./HomeLayout.styled";

export const HomeLayout = () => {
  const [isVisible, setIsVisible] = useState({
    login: false,
    preview: true,
    registration: false,
  });
  const [isOpen, setIsOpen] = useState({
    login: false,
    preview: true,
    registration: false,
  });
  const onHandleAnimationEnd = (val) => () => {
    if (!isOpen[val]) setIsVisible((prev) => ({ ...prev, [val]: false }));
  };
  const onHandleOpenForm = (val) => (next) => () => {
    setIsOpen((prev) => ({ ...prev, [val]: false, [next]: true }));
    setIsVisible((prev) => ({ ...prev, [next]: true }));
  };
  console.log(isVisible, isOpen);
  return (
    <Wrapper>
      {isVisible.preview && (
        <FormWrapper
          key={"preview_form"}
          isOpen={isOpen.preview}
          onAnimationEnd={onHandleAnimationEnd("preview")}
        >
          <PreviewForm onHandleOpenForm={onHandleOpenForm("preview")} />
        </FormWrapper>
      )}
      {isVisible.login && (
        <FormWrapper
          key={"login_form"}
          isOpen={isOpen.login}
          onAnimationEnd={onHandleAnimationEnd("login")}
        >
          <LoginForm onHandleOpenForm={onHandleOpenForm("login")} />
        </FormWrapper>
      )}
      {isVisible.registration && (
        <FormWrapper
          key={"registration_form"}
          isOpen={isOpen.registration}
          onAnimationEnd={onHandleAnimationEnd("registration")}
        >
          <RegistrationForm
            onHandleOpenForm={onHandleOpenForm("registration")}
          />
        </FormWrapper>
      )}
    </Wrapper>
  );
};
