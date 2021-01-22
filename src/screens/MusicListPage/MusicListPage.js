import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectedPage";
import MusicCard from "./MusicCard";
import Loading from "../../components/Loading/Loading"
import { CreateMusicButton, CreateMusicIcon, MusicListContainer } from "./styled";
import { mdiMusicNotePlus } from "@mdi/js";
import { Dialog, DialogContent, DialogTitle, Snackbar } from "@material-ui/core";
import CreateMusicForm from "./CreateMusicForm";
import { Alert } from "@material-ui/lab";

const MusicListPage = () => {
  useProtectedPage();
  
  const [openCreateMusic, setOpenCreateMusic] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState("");
  
  const [data, updateData] = useRequestData({}, "/music");

  const { music } = data;

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

  const handleAlert = (type, message) => {
    setSeverity(type);
    setAlertMessage(message);
    setAlert(true);
  };

  const handleCloseCreateMusicAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

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
            updateMusic={updateData}
            alert={handleAlert}
          />
        </DialogContent>
      </Dialog>
      <Snackbar 
        open={alert}
        autoHideDuration={6000}
        onClose={handleCloseCreateMusicAlert}
      >
        <Alert onClose={handleCloseCreateMusicAlert} severity={severity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </MusicListContainer>
  );
}

export default MusicListPage;