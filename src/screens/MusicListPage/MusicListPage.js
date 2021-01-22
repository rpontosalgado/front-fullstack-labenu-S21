import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectedPage";
import MusicCard from "./MusicCard";
import Loading from "../../components/Loading/Loading"
import { CreateMusicButton, CreateMusicIcon, MusicListContainer } from "./styled";
import { mdiMusicNotePlus } from "@mdi/js";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import CreateMusicForm from "./CreateMusicForm";
import AlertPop from "../../components/AlertPop/AlertPop";

const MusicListPage = () => {
  useProtectedPage();
  
  const [openCreateMusic, setOpenCreateMusic] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: ""
  });
  
  const [music, updateMusic] = useRequestData({}, "/music");
  const { songs } = music;
  
  const [playlists] = useRequestData({}, "/playlist");
  const { playlist } = playlists;

  const RenderMusicList = () => (
    songs.sort((a, b) => b.date - a.date).map(item => (
      <MusicCard
        key={item.id}
        musicId={item.id}
        title={item.title}
        album={item.album}
        file={item.file}
        date={item.date}
        authorName={item.authorName}
        genres={item.genres}
        playlist={playlsit}
        alert={handleAlert}
      />
    ))
  );

  const handleClickOpenCreateMusic = () => {
    setOpenCreateMusic(true);
  };

  const handleCloseCreateMusic = () => {
    setOpenCreateMusic(false);
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
    <MusicListContainer>
      {songs ? RenderMusicList() : <Loading />}
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
            updateMusic={updateMusic}
            alert={handleAlert}
          />
        </DialogContent>
      </Dialog>
      <AlertPop
        close={handleCloseAlert}
        alert={alert}
      />
    </MusicListContainer>
  );
}

export default MusicListPage;