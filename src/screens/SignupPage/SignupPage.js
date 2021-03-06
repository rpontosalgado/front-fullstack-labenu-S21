import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { mdiSharkFin } from "@mdi/js";
import { ScreenContainer, SignupIcon } from "./styled";
import SignupForm from "./SignupForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignupPage = props => {
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
      <SignupIcon path={mdiSharkFin} />
      <SignupForm
        setButtonName = {props.setButtonName}
        setOpen={setOpen}        
        setMessage={setMessage}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">{message}</Alert>
      </Snackbar>
    </ScreenContainer>
  );
};

export default SignupPage;