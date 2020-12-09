import React from "react";
import { useHistory } from "react-router-dom";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { InputsContainer, SignupFormContainer } from "./styled";

const SignupForm = props => {
  const history = useHistory();
  
  const [form, handleInputChange] = useForm({
    name: "",
    email: "",
    nickname: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const onClickSignup = event => {
    event.preventDefault();
    
    const element = document.getElementById("signup-form");
    
    const isValid = element.checkValidity();
    
    element.reportValidity();
    
    if (isValid) {
      signUp(form, history, props.setButtonName, setIsLoading);
    }
  }

  return (
    <form id={"signup-form"}>
      <SignupFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={'name'}
            onChange={handleInputChange}
            label={'Nome'}
            variant={'outlined'}
            margin={'normal'}
            fullWidth
            autoFocus
            required
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
            label={'E-mail'}
            variant={'outlined'}
            margin={'normal'}
            type={'email'}
            fullWidth
            required
          />
          <TextField
            value={form.nickname}
            name={'nickname'}
            onChange={handleInputChange}
            label={'Apelido'}
            variant={'outlined'}
            margin={'normal'}
            fullWidth
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
          onClick={onClickSignup}
        >
          {isLoading ? <CircularProgress color={"primary"} size={26} /> : "Fazer Cadastro"}
        </Button>
      </SignupFormContainer>
    </form>
  );
}

export default SignupForm;