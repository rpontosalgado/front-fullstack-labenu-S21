import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectedPage";
import MusicCard from "./MusicCard";
import Loading from "../../components/Loading/Loading"
import { CreateMusicButton, CreateMusicIcon, MusicListContainer } from "./styled";
import { mdiMusicNotePlus } from "@mdi/js";
import { Dialog, DialogContent, DialogTitle, Menu, MenuItem } from "@material-ui/core";
import CreateMusicForm from "./CreateMusicForm";
import AlertPop from "../../components/AlertPop/AlertPop";
import { getData } from "../../services/data";
import { addMusicToPlaylist } from "../../services/playlist";

const MusicListPage = () => {
  useProtectedPage();

  const [musicData, updateMusicData] = useRequestData({}, "/music");
  const { music } = musicData;

  const [playlistsData, setPlaylistData] = useState({});
  
  const [openCreateMusic, setOpenCreateMusic] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const [musicToPlaylistId, setMusicToPlaylistId] = useState("");

  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: ""
  });

  const handleClickOpenCreateMusic = () => {
    setOpenCreateMusic(true);
  };

  const handleCloseCreateMusic = () => {
    setOpenCreateMusic(false);
  };

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
  
  const RenderMusicList = () => (
    music.sort((a, b) => b.date - a.date).map(item => (
      <MusicCard
        key={item.id}
        musicId={item.id}
        title={item.title}
        album={item.album}
        file={item.file}
        date={item.date}
        authorName={item.authorName}
        genres={item.genres}
        setMusicToPlaylistId={setMusicToPlaylistId}
        openMenu={handleClickOpenPlaylistsMenu}
      />
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
    <MusicListContainer>
      {music ? RenderMusicList() : <Loading />}
      <CreateMusicButton
        color="primary"
        onClick={handleClickOpenCreateMusic}
      >
        <CreateMusicIcon path={mdiMusicNotePlus} />
      </CreateMusicButton>
      <Dialog open={openCreateMusic} onClose={handleCloseCreateMusic}>
        <DialogTitle>Criar nova música</DialogTitle>
        <DialogContent>
          <CreateMusicForm
            close={handleCloseCreateMusic}
            updateMusic={updateMusicData}
            alert={handleAlert}
          />
        </DialogContent>
      </Dialog>
      {playlistsData.playlist && RenderMenu()}
      <AlertPop
        close={handleCloseAlert}
        alert={alert}
      />
    </MusicListContainer>
  );
}

export default MusicListPage;