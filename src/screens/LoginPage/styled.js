import styled from "styled-components";
import Icon from "@mdi/react";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

export const LoginIcon = styled(Icon)`
  display: block;
  color: rgba(0, 0, 0, 0.87);
  width: 40vw;
  max-width: 160px;
  margin: 20px;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 480px;
  margin-bottom: 16px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 480px;
`