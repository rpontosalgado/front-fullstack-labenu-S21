import './App.css';
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Router from "./routes/Router";
import Navbar from './components/Navbar/Navbar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar
}));

function App() {
  const classes = useStyles();

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
      <div className={classes.offset} />
      <main>
        <Router setButtonName={ setButtonName } />
      </main>
    </BrowserRouter>
  );
}

export default App;
