import styled from "styled-components";
import Icon from "@mdi/react";
import { Button, Typography } from "@material-ui/core";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderButton = styled(Button)`
  display: flex;
  align-items: center;
`

export const LogoIcon = styled(Icon)`
  display: block;
  color: inherit;
  height: 2rem;
`

export const HeaderTitle = styled(Typography)`
  margin-left: 0.75rem;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.1em;
`

export const LogTitle = styled(Typography)`
  text-transform: none;
  font-size: 1rem;
  font-weight: 400;
`