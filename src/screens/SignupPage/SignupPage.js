import React from "react";
import { mdiSharkFin } from "@mdi/js";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { ScreenContainer, SignupIcon } from "./styled";
import SignupForm from "./SignupForm";

const SignupPage = props => {
  useUnprotectedPage();

  return (
    <ScreenContainer>
      <SignupIcon path={mdiSharkFin} />
      <SignupForm setButtonName = {props.setButtonName} />
    </ScreenContainer>
  );
}

export default SignupPage;