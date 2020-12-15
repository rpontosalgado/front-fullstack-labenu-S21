import React, { useState } from "react";
import useGetUserMusic from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectedPage";
import MusicCard from "./MusicCard";
import Loading from "../../components/Loading/Loading"
import { CreateMusicButton, CreateMusicIcon, MusicListContainer } from "./styled";
import { mdiMusicNotePlus } from "@mdi/js";
import { Dialog, DialogContent, DialogTitle, Snackbar } from "@material-ui/core";
import CreateMusicForm from "./CreateMusicForm";
import { Alert } from "@material-ui/lab";

const MusicListPage = props => {
  useProtectedPage();
  const [openCreateMusic, setOpenCreateMusic] = useState(false);
  const [createMusicError, setCreateMusicError] = useState(false);
  const [createMusicErrorMessage, setCreateMusicErrorMessage] = useState("");
  const [list, updateList] = useGetUserMusic({}, "/music");

  const { music } = list;

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
      />
    ))
  );

  const handleClickOpenCreateMusic = () => {
    setOpenCreateMusic(true);
  };

  const handleCloseCreateMusic = () => {
    setOpenCreateMusic(false);
  };

  const handleCreateMusicError = message => {
    setCreateMusicError(true);
    setCreateMusicErrorMessage(message);
  };

  const handleCloseCreateMusicError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setCreateMusicError(false);
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
            handleCloseCreateMusic={handleCloseCreateMusic}
            updateList={updateList}
            handleCreateMusicError={handleCreateMusicError}
          />
        </DialogContent>
      </Dialog>
      <Snackbar 
        open={createMusicError}
        autoHideDuration={6000}
        onClose={handleCloseCreateMusicError}
      >
        <Alert onClose={handleCloseCreateMusicError} severity="error">
          {createMusicErrorMessage}
        </Alert>
      </Snackbar>
    </MusicListContainer>
  );
}

export default MusicListPage;