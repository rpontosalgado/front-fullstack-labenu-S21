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
import AlbumsPage from "../screens/AlbumsPage/AlbumsPage";
import AlbumMusicPage from "../screens/AlbumMusicPage/AlbumMusicPage";
import ArtistsPage from "../screens/ArtistsPage/ArtistsPage";
import ArtistMusicPage from "../screens/ArtistMusicPage/ArtistMusicPage";

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
      <Route exact path={"/music/:id"}>
        <MusicDetailsPage />
      </Route>
      <Route exact path={"/playlist"}>
        <PlaylistsPage />
      </Route>
      <Route exact path={"/playlist/:id"}>
        <PlaylistDetailsPage />
      </Route>
      <Route exact path={"/genres"}>
        <GenresPage />
      </Route>
      <Route exact path={"/genres/:genre"}>
        <GenreMusicPage />
      </Route>
      <Route exact path={"/albums"}>
        <AlbumsPage />
      </Route>
      <Route exact path={"/albums/:album"}>
        <AlbumMusicPage />
      </Route>
      <Route exact path={"/artists"}>
        <ArtistsPage />
      </Route>
      <Route exact path={"/artists/:artist"}>
        <ArtistMusicPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;