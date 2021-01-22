import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Divider, Typography } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CreatePlaylistButton, CreatePlaylistIcon, PlaylistsContainer, PlaylistsPageContainer } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import PlaylistCard from "../PlaylistsPage/PlaylistCard";
import CreatePlaylistForm from "./CreatePlaylistForm";
import AlertPop from "../../components/AlertPop/AlertPop";

const PlaylistsPage = () => {
  useProtectedPage();

  const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: ""
  });

  const [data, updateData] = useRequestData({}, "/playlist");

  const playlists = data.playlist;

  const RenderPlaylists = () => (
    playlists.map(playlist => (
      <PlaylistCard
        key={playlist.id}
        playlistId={playlist.id}
        title={playlist.title}
        subtitle={playlist.subtitle}
        creatorName={playlist.creatorName}
        alert={handleAlert}
      />
    ))
  );
  
  const handleClickOpenCreatePlaylist = () => {
    setOpenCreatePlaylist(true);
  };

  const handleCloseCreatePlaylist = () => {
    setOpenCreatePlaylist(false);
  };

  const handleAlert = (severity, message) => {
    setAlert({
      open: true,
      severity,
      message
    });
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  return (
    <PlaylistsPageContainer>
      <Typography variant="h2" color="textPrimary" >Playlists</Typography>
      <Divider/>
      <PlaylistsContainer>
        {playlists ? RenderPlaylists() : <Loading />}
      </PlaylistsContainer>
      <CreatePlaylistButton
        color="primary"
        onClick={handleClickOpenCreatePlaylist}
      >
        <CreatePlaylistIcon />
      </CreatePlaylistButton>
      <Dialog open={openCreatePlaylist} onClose={handleCloseCreatePlaylist}>
        <DialogTitle>Criar Playlist</DialogTitle>
        <DialogContent>
          <CreatePlaylistForm
            close={handleCloseCreatePlaylist}
            updatePlaylists={updateData}
            alert={handleAlert}
          />
        </DialogContent>
      </Dialog>
      <AlertPop
        close={handleCloseAlert}
        alert={alert}
      />
    </PlaylistsPageContainer>
  );
}

export default PlaylistsPage;