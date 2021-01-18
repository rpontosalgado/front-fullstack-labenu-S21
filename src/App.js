import './App.css';
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Router from "./routes/Router";
import Navbar from './components/Navbar/Navbar';

const InnerScreenContainer = styled.div`
  padding-top: 64px;
`

function App() {
  const token = localStorage.getItem("token");

  const [buttonName, setButtonName] = useState(token ? "Logout" : "Login");
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <BrowserRouter>
      <Header
        buttonName={buttonName}
        setButtonName={setButtonName}
        setOpenNavBar={setOpenNavBar}
      />
      <Navbar openNavBar={openNavBar} setOpenNavBar={setOpenNavBar} />
      <InnerScreenContainer>
        <Router setButtonName={ setButtonName } />
      </InnerScreenContainer>
    </BrowserRouter>
  );
}

export default App;
