import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog, DialogContent, IconButton, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { mdiSharkFin } from "@mdi/js";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import { PlaceholderMedia, PlaceholderIcon, PlaylistDetailsPageContainer, PlaylistImage, PlaylistMusic, PlaylistMusicItem, AudioPlayer } from "./styled";
import { deleteMusicFromPlaylist } from "../../services/playlist";

const PlaylistDetailsPage = () => {
  useProtectedPage();

  const { id } = useParams();
  const [details, updateDetails] = useRequestData({}, `/playlist/${id}`);
  const { playlist } = details;

  const [playerOpen, setPlayerOpen] = useState(false);
  const [song, setSong] = useState({
    title: "",
    album: "",
    artist: "",
    file: ""
  });

  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: ""
  });

  const handleClickSong = (title, album, artist, file) => {
    setSong({title, album, artist, file});
    
    setPlayerOpen(true);
  }

  const handleClosePlayer = () => {
    setPlayerOpen(false);
  }

  const handleDeleteClick = (musicId) => {
    deleteMusicFromPlaylist(
      `/playlist/${id}/music/${musicId}`,
      updateDetails,
      handleAlert
    )
  }

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

  const playlistImage = (src) => (
    <PlaylistImage
      image={src}
      alt="Playlist Image"
      title="Playlist Image"
    />
  )

  const placeholderImage = () => (
    <PlaceholderMedia>
      <PlaceholderIcon path={mdiSharkFin} />
    </PlaceholderMedia>
  )

  const renderPlaylistMusic = () => (
    playlist.music.map(item => (
      <PlaylistMusicItem 
        key={item.id}
        button
        onClick={
          () => handleClickSong(
            item.title,
            item.album,
            item.authorName,
            item.file
          )
        }
      >
        <ListItemText 
          primary={item.title}
          secondary={`by ${item.authorName}`}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDeleteClick(item.id)}
          >
            <Delete color="secondary"/>
          </IconButton>
        </ListItemSecondaryAction>
      </PlaylistMusicItem>
    ))
  )

  const renderPlaylistDetails = () => (
    <PlaylistDetailsPageContainer>
      {playlist.image ? playlistImage(playlist.image) : placeholderImage()}
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        style={{"margin-top": "1.5rem"}}
      >
        {playlist.title}
      </Typography>
      <Typography
        variant="body2"
        component="h4"
        gutterBottom
      >
        {playlist.subtitle}
      </Typography>
      <Typography
        variant="body1"
        component="h5"
        gutterBottom
      >
        by {playlist.creatorName}
      </Typography>
      <PlaylistMusic>
        {renderPlaylistMusic()}
      </PlaylistMusic>
      <Dialog open={playerOpen} onClose={handleClosePlayer}>
        <DialogContent>
        <AudioPlayer controls preload="auto">
          <source src={song.file}/>
          Seu navegador não suporta o elemento de audio
        </AudioPlayer>
        <Typography
          variant="h6"
          component="h3"
          align="center"
          gutterBottom
        >
          {song.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          align="center"
        >
          {song.artist}
        </Typography>
        <Typography
          variant="body1"
          component="h4"
          align="center"
          gutterBottom
        >
          {song.album}
        </Typography>
        </DialogContent>
      </Dialog>
      <AlertPop
        close={handleCloseAlert}
        alert={alert}
      />
    </PlaylistDetailsPageContainer>
  )

  return (playlist ? renderPlaylistDetails() : <Loading />)
  
}

export default PlaylistDetailsPage;