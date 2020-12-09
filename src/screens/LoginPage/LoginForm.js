import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { login } from "../../services/user";
import { InputsContainer, LoginFormContainer } from "./styled";
import useForm from "../../hooks/useForm";

const LoginForm = props => {
  const [form, handleInputChange] = useForm({input: "", password: ""});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogin = event => {
    event.preventDefault();

    const element = document.getElementById("login-form");

    const isValid = element.checkValidity();

    element.reportValidity();

    if (isValid) {
      login(form, history, props.setButtonName, setIsLoading);
    }
  }

  return (
    <form id={"login-form"}>
      <LoginFormContainer>
        <InputsContainer>
          <TextField 
            value={form.input}
            name={'input'}
            onChange={handleInputChange}
            label={'E-mail ou Nickname'}
            variant={'outlined'}
            margin={'normal'}
            fullWidth
            autoFocus
            required
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
            label={'Senha'}
            variant={'outlined'}
            margin={'normal'}
            type={'password'}
            fullWidth
            required
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          size={'large'}
          fullWidth
          onClick={onClickLogin}
        >
          {isLoading ? <CircularProgress color={"primary"} size={26}/> : "Fazer Login"}
        </Button>
      </LoginFormContainer>
    </form>
  );
}

export default LoginForm;