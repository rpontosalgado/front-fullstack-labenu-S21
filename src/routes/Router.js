import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "../screens/ErrorPage/ErrorPage";
import LoginPage from "../screens/LoginPage/LoginPage";
import SignupPage from "../screens/SignupPage/SignupPage";
import MusicListPage from "../screens/MusicListPage/MusicListPage";
import MusicDetailsPage from "../screens/MusicDetailsPage/MusicDetailsPage";
import PlaylistsPage from "../screens/PlaylistsPage/PlaylistsPage";
import PlaylistDetailsPage from "../screens/PlaylistDetailsPage/PlaylistDetailsPage";
import GenresPage from "../screens/GenresPage/GenresPage";
import GenreMusicPage from "../screens/GenreMusicPage/GenreMusicPage";

const Router = props => {
  return (
    <Switch>
      <Route exact path={"/user/login"}>
        <LoginPage setButtonName = {props.setButtonName} />
      </Route>
      <Route exact path={"/user/signup"}>
        <SignupPage setButtonName = {props.setButtonName} />
      </Route>
      <Route exact path={["/music", "/"]}>
        <MusicListPage />
      </Route>
      <Route exact path={"/music/genre"}>
        <GenresPage />
      </Route>
      <Route exact path={"/music/genre/:genre"}>
        <GenreMusicPage />
      </Route>
      <Route exact path={"/music/:id"}>
        <MusicDetailsPage />
      </Route>
      <Route exact path={"/playlist"}>
        <PlaylistsPage />
      </Route>
      <Route exact path={"/playlist/:id"}>
        <PlaylistDetailsPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default Router;