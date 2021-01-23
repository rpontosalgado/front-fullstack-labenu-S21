import { Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AlertPop from "../../components/AlertPop/AlertPop";
import Loading from "../../components/Loading/Loading";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { getData } from "../../services/data";
import { addMusicToPlaylist } from "../../services/playlist";
import MusicDetailsCard from "./MusicDetailsCard";
import { MusicDetailsContainer } from "./styled";

const MusicDetailsPage = () => {
  useProtectedPage();
  
  const { id } = useParams();
  
  const [details] = useRequestData({}, `/music/${id}`);
  const { music } = details;

  const [playlistsData, setPlaylistData] = useState({});

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: ""
  });

  const handleClickOpenPlaylistsMenu = event => {
    if (!playlistsData.playlist) getData("/playlist", setPlaylistData);

    setAnchorEl(event.currentTarget);
  };

  const handleClosePlaylistsMenu = () => {
    setAnchorEl(null);
  };

  const handleAlert = (severity, message) => {
    setAlert({
      open: true,
      message,
      severity
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
      musicId: id
    }

    addMusicToPlaylist(
      body,
      "/playlist/music",
      handleClosePlaylistsMenu,
      handleAlert
    );
  };

  const renderMusicDetails = () => (
    <MusicDetailsCard 
      musicId={music.id}
      title={music.title}
      album={music.album}
      file={music.file}
      date={music.date}
      authorName={music.authorName}
      genres={music.genres}
      openMenu={handleClickOpenPlaylistsMenu}
    />
  );

  const RenderMenu = () => (
    <Menu
      id="playlists-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
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
    <MusicDetailsContainer>
      {music ? renderMusicDetails() : <Loading />}
      {playlistsData.playlist && RenderMenu()}
      <AlertPop
        close={handleCloseAlert}
        alert={alert}
      />
    </MusicDetailsContainer>
  );
}

export default MusicDetailsPage;