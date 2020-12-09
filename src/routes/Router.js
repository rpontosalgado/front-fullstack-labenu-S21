import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../screens/ErrorPage/ErrorPage";
import LoginPage from "../screens/LoginPage/LoginPage";

const Router = props => {
  return (
    <Switch>
      <Route exact path={"/user/login"}>
        <LoginPage setButtonName = {props.setButtonName} />
      </Route>
      <Route exact path={"/signup"}>
        <div />
      </Route>
      <Route exact path={["/music", "/"]}>
        <div />
      </Route>
      <Route exact path={"/music/:id"}>
        <div />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  )
}

export default Router;