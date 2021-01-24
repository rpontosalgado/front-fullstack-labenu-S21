import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { mdiSharkFin } from "@mdi/js";
import { LoginIcon, ScreenContainer, SignUpButtonContainer } from "./styled";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { goToSignup } from "../../routes/Coordinator";

const LoginPage = props => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useUnprotectedPage();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <ScreenContainer>
      <LoginIcon path={mdiSharkFin} />
      <LoginForm 
        setButtonName={props.setButtonName}
        setOpen={setOpen}        
        setMessage={setMessage}
      />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignup(history)}
          color="primary"
          fullWidth
        >
          Não tem cadastro? Clique aqui
        </Button>
      </SignUpButtonContainer>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">{message}</Alert>
      </Snackbar>
    </ScreenContainer>
  );
};

export default LoginPage;