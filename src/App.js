import './App.css';
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Router from "./routes/Router";

const InnerScreenContainer = styled.div`
  padding-top: 64px;
`

function App() {
  const token = localStorage.getItem("token");

  const [buttonName, setButtonName] = useState(token ? "Logout" : "Login");

  return (
    <BrowserRouter>
      <Header buttonName={buttonName} setButtonName={setButtonName} />
      <InnerScreenContainer>
        <Router setButtonName={ setButtonName } />
      </InnerScreenContainer>
    </BrowserRouter>
  );
}

export default App;
