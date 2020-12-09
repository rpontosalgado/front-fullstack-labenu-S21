import { Typography } from "@material-ui/core";
import Icon from "@mdi/react";
import styled from "styled-components";

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 20px;
`

export const ErrorIcon = styled(Icon)`
  display: block;
  color: rgba(0, 0, 0, 0.87);
  width: 40vw;
  max-width: 400px;
`

export const ErrorText = styled(Typography)`
  font-size: 1.5rem;
`