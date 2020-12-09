import Icon from "@mdi/react";
import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

export const SignupIcon = styled(Icon)`
  display: block;
  color: rgba(0, 0, 0, 0.87);
  width: 40vw;
  max-width: 160px;
  margin: 20px;
`

export const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  margin-bottom: 20px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`