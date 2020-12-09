import React from "react";
import { useHistory } from "react-router-dom";
import { mdiSharkFin } from "@mdi/js";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { LoginIcon, ScreenContainer, SignUpButtonContainer } from "./styled";
import LoginForm from "./LoginForm";
import { Button } from "@material-ui/core";
import { goToSignup } from "../../routes/Coordinator";

const LoginPage = props => {
  const history = useHistory();

  useUnprotectedPage();

  return (
    <ScreenContainer>
      <LoginIcon path={mdiSharkFin} />
      <LoginForm setButtonName={props.setButtonName} />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignup(history)}
          color={"primary"}
          fullWidth
        >
          Não tem cadastro? Clique aqui
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage;