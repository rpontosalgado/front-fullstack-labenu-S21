import React from "react";
import { useHistory } from "react-router-dom";
import { goToLogin, goToMusicList } from "../../routes/Coordinator";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { ButtonContainer, HeaderButton, HeaderTitle, LogoIcon, LogTitle } from "./styled";
import { mdiSharkFin } from '@mdi/js'; 

const Header = props => {
  const {buttonName, setButtonName} = props;
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  }

  const HeaderAction = () => {
    const token = localStorage.getItem("token");
    
    if (token) {
      logout();
      setButtonName("Login");
    }

    goToLogin(history);
  }

  return (
    <AppBar>
      <Toolbar>
        <ButtonContainer>
          <HeaderButton color={"inherit"} onClick={()=>goToMusicList(history)}>
            <LogoIcon path={mdiSharkFin} />
            <HeaderTitle variant={"h1"} >SoundEnu</HeaderTitle>
          </HeaderButton>
          <Button color={"inherit"} variant={"contained"} onClick={HeaderAction} >
            <LogTitle color={"primary"} variant={"h2"} >{buttonName}</LogTitle>
          </Button>
        </ButtonContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Header;