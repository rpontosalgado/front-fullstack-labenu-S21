import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, IconButton, ListItemSecondaryAction, ListItemText, Menu, MenuItem, Typography } from "@material-ui/core";
import { AddToPlaylistButton, AudioPlayer, GenreMusicList, GenreMusicListItem, GenreMusicPageContainer } from "./styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { PlaylistAdd } from "@material-ui/icons";
import { getData } from "../../services/data";
import { addMusicToPlaylist } from "../../services/playlist"
import AlertPop from "../../components/AlertPop/AlertPop"
import Loading from "../../components/Loading/Loading"

const AlbumMusicPage = () => {
  useProtectedPage();

  const { album } = useParams();

  const [albumMusic] = useRequestData({}, `/music/?album=${album}`);
  const { music } = albumMusic;

  const [playerOpen, setPlayerOpen] = useState(false);
  const [song, setSong] = useState({
    id: "",
    title: "",
    album: "",
    artist: "",
    file: ""
  });

  const [playlistsData, setPlaylistData] = useState({});

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const [musicToPlaylistId, setMusicToPlaylistId] = useState("");

  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: ""
  });

  const handleClickSong = (id, title, album, artist, file) => {
    setSong({id, title, album, artist, file});
    
    setPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setPlayerOpen(false);
  };

  const handleClickOpenPlaylistsMenu = (event, musicId) => {
    if (!playlistsData.playlist) getData("/playlist", setPlaylistData);

    setMusicToPlaylistId(musicId);
    
    setAnchorEl(event.currentTarget);
  };

  const handleClosePlaylistsMenu = () => {
    setAnchorEl(null);
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

  const handleClickAddToPlaylist = (playlistId) => {
    const body = {
      playlistId,
      musicId: musicToPlaylistId
    }

    addMusicToPlaylist(
      body,
      "/playlist/music",
      handleClosePlaylistsMenu,
      handleAlert
    );
  };

  const RenderAlbumMusic = () => (
    music.map(item => (
      <AlbumMusicListItem
        key={item.id}
        button
        onClick={
          () => handleClickSong(
            item.id,
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
            aria-label="add to playlist"
            aria-controls="playlists-menu"
            aria-haspopup="true"
            onClick={(event) => handleClickOpenPlaylistsMenu(event, item.id)}
          >
            <PlaylistAdd />
          </IconButton>
        </ListItemSecondaryAction>
      </AlbumMusicListItem>
    ))
  );

  const RenderMenu = () => (
    <Menu
      id="playlists-menu"
      anchorEl={anchorEl}
      keepMounted
      open={openMenu}
      onClose={handleClosePlaylistsMenu}
      PaperProps={{
        style: {
          maxHeight: "13rem",
          width: '32ch'
        }
      }}
    >
      {playlistsData.playlist.map(option => (
        <MenuItem
          key={option.id}
          onClick={() => handleClickAddToPlaylist(option.id)}
        >
          {option.title}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <AlbumMusicPageContainer>
      <Typography
        variant="h4"
        component="h3"
        color="textPrimary"
      >
        Álbum:
      </Typography>
      <Typography
        variant="h3"
        component="h4"
        color="textPrimary"
      >
        { album }
      </Typography>
      <GenreMusicList>
        {music ? RenderAlbumMusic() : <Loading />}
      </GenreMusicList>
      <Dialog open={playerOpen} onClose={handleClosePlayer}>
        <DialogContent>
        <AudioPlayer controls preload="auto">
          <source src={song.file}/>
          Seu navegador não suporta o elemento de audio
        </AudioPlayer>
        <Typography
          variant="h6"
          component="h3"
          color="textPrimary"
          align="center"
          gutterBottom
        >
          {song.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="textPrimary"
          align="center"
        >
          {song.artist}
        </Typography>
        <Typography
          variant="body1"
          component="h4"
          color="textPrimary"
          align="center"
          gutterBottom
        >
          {song.album}
        </Typography>
        </DialogContent>
        <DialogActions>
          <AddToPlaylistButton
            aria-label="add to playlist"
            aria-controls="playlists-menu"
            aria-haspopup="true"
            onClick={(event) => handleClickOpenPlaylistsMenu(event, song.id)}
          >
            <PlaylistAdd />
          </AddToPlaylistButton>
        </DialogActions>
      </Dialog>
      {playlistsData.playlist && RenderMenu()}
      <AlertPop
        close={handleCloseAlert}
        alert={alert}
      />
    </AlbumMusicPageContainer>
  )
}

export default AlbumMusicPage;