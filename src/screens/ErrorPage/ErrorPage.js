import React from "react";
import { ErrorIcon, ErrorPageContainer, ErrorText } from "./styled";
import { mdiWaves } from "@mdi/js";

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorIcon path={mdiWaves} />
      <ErrorText color="textPrimary" variant="h3" align="center">
        {"Erro 404 - Página não encontrada :("}
      </ErrorText>
    </ErrorPageContainer>
  )
}

export default ErrorPage;