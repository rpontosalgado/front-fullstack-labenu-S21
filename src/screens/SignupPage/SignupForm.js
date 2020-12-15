import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, CircularProgress, IconButton, Input, InputAdornment, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { InputsContainer, SignupFormContainer } from "./styled";
import { signup } from "../../services/user";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const SignupForm = props => {
  const history = useHistory();
  
  const [form, handleInputChange] = useForm({
    name: "",
    email: "",
    nickname: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [nicknameError, setNicknameError] = useState(false);
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onClickSignup = event => {
    event.preventDefault();

    setNameError(false);
    setNameErrorMessage("");
    setEmailError(false);
    setEmailErrorMessage("");
    setNicknameError(false);
    setNicknameErrorMessage("");
    setPasswordError(false);
    setPasswordErrorMessage("");
    
    const element = document.getElementById("signup-form");
    
    const isValid = element.checkValidity();
    
    if (isValid) {
      if (form.password.length < 6) {
        setPasswordError(true);
        setPasswordErrorMessage("Senha deve ter no mínimo 6 caracteres");
      } else {
        signup(
          form,
          history,
          props.setButtonName,
          props.setOpem,
          props.setMessage,
          setIsLoading
        );        
      }
    } else {
      if(!form.name) {
        setNameError(true);
        setNameErrorMessage("Favor informar um nome")
      }
      
      if(!form.email || form.email.indexOf("@") === -1) {
        setEmailError(true);
        setEmailErrorMessage("Favor informar um e-mail válido")
      }
      
      if(!form.nickname) {
        setNicknameError(true);
        setNicknameErrorMessage("Favor informar um apelido")
      }
      
      if(!form.password) {
        setPasswordError(true);
        setPasswordErrorMessage("Favor informar uma senha")
      }
    }
  }

  return (
    <form id="signup-form">
      <SignupFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name='name'
            label='Nome'
            onChange={handleInputChange}
            error={nameError}
            helperText={nameErrorMessage}
            variant='outlined'
            margin='normal'
            fullWidth
            autoFocus
            required
          />
          <TextField
            value={form.email}
            name='email'
            label='E-mail'
            onChange={handleInputChange}
            error={emailError}
            helperText={emailErrorMessage}
            variant='outlined'
            margin='normal'
            type='email'
            fullWidth
            required
          />
          <TextField
            value={form.nickname}
            name='nickname'
            label='Apelido'
            onChange={handleInputChange}
            error={nicknameError}
            helperText={nicknameErrorMessage}
            variant='outlined'
            margin='normal'
            fullWidth
            required
          />
          <TextField
            value={form.password}
            name='password'
            label='Senha'
            onChange={handleInputChange}
            error={passwordError}
            helperText={passwordErrorMessage}
            variant='outlined'
            margin='normal'
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }}
            type={showPassword ? 'text' : 'password'}
            fullWidth
            required
          />
        </InputsContainer>
        <Button
          color='primary'
          variant='contained'
          type='submit'
          size='large'
          fullWidth
          onClick={onClickSignup}
        >
          {isLoading ? <CircularProgress color="inherit" size={26} /> : "Fazer Cadastro"}
        </Button>
      </SignupFormContainer>
    </form>
  );
}

export default SignupForm;