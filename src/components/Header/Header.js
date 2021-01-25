import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { ButtonContainer, HeaderButton, HeaderTitle, LogoIcon, LogTitle } from "./styled";
import { mdiSharkFin } from '@mdi/js'; 
import { goToLogin } from "../../routes/Coordinator";

const Header = props => {
  const {buttonName, setButtonName, setOpenNavBar} = props;

  const token = localStorage.getItem("token");
  const history = useHistory();

  const NavMenuAction = () => {
    if (token) {
      setOpenNavBar(true);
    } else {
      goToLogin(history);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const HeaderAction = () => {
    if (token) {
      logout();
      setButtonName("Login");
    }

    goToLogin(history);
  };

  return (
    <AppBar>
      <Toolbar>
        <ButtonContainer>
          <HeaderButton color="inherit" onClick={NavMenuAction}>
            <LogoIcon path={mdiSharkFin} />
            <HeaderTitle variant="h1" >SoundEnu</HeaderTitle>
          </HeaderButton>
          <Button color="inherit" variant="contained" onClick={HeaderAction} >
            <LogTitle color="primary" variant="h2" >{buttonName}</LogTitle>
          </Button>
        </ButtonContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;