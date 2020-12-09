import React from "react";
import ErrorPage from "../screens/ErrorPage/ErrorPage";
import { Route, Switch } from "react-router-dom";

const Router = props => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <div />
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