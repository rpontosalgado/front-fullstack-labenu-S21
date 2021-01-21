import React from "react";
import { Dialog, DialogContent, DialogTitle, Divider, Snackbar, Typography } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CreatePlaylistButton, CreatePlaylistIcon, PlaylistsContainer, PlaylistsPageContainer } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { Alert } from "@material-ui/lab";
import Loading from "../../components/Loading/Loading";

const PlaylistsPage = () => {
  useProtectedPage();

  const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false);
  const [createPlaylistError, setCreatePlaylistError] = useState(false);
  const [createPlaylistErrorMessage, setCreatePlaylistErrorMessage] = useState("");

  const [data, updateData] = useRequestData({}, "/playlist");

  const playlists = data.playlist;

  const RenderPlaylists = () => (
    playlists.map(playlist => (
      <PlaylistCard 
        key={playlist.id}
        playlistId={playlist.id}
        title={playlist.title}
        subtitle={playlist.subtitle}
      />
    ))
  );
  
  const handleClickOpenCreatePlaylist = () => {
    setOpenCreatePlaylist(true);
  };

  const handleCloseCreatePlaylist = () => {
    setOpenCreatePlaylist(false);
  };

  const handleCreatePlaylistError = message => {
    setCreatePlaylistError(true);
    setCreatePlaylistErrorMessage(message);
  };

  const handleCloseCreatePlaylistError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setCreatePlaylistError(false);
  }

  return (
    <PlaylistsPageContainer>
      <Typography variant="h2">Playlists</Typography>
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
          <CreatePlaylistFrom
            close={handleCloseCreatePlaylist}
            updatePlaylists={updateData}
            error={handleCreatePlaylistError}
          />
        </DialogContent>
      </Dialog>
      <Snackbar
        open={createPlaylistError}
        autoHideDuration={6000}
        onClose={handleCloseCreatePlaylistError}
      >
        <Alert onClose={handleCloseCreatePlaylistError} severity="error">
          {createPlaylistErrorMessage}
        </Alert>
      </Snackbar>
    </PlaylistsPageContainer>
  );
}

export default PlaylistsPage;