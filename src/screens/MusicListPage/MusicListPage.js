import React, { useState } from "react";
import useGetUserMusic from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectedPage";
import MusicCard from "./MusicCard";
import Loading from "../../components/Loading/Loading"
import { CreateMusicButton, CreateMusicIcon, MusicListContainer } from "./styled";
import { mdiMusicNotePlus } from "@mdi/js";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

const MusicListPage = props => {
  useProtectedPage();
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MusicListContainer>
      {music ? RenderMusicList() : <Loading />}
      <CreateMusicButton color="primary" onClick={handleClickOpen} >
        <CreateMusicIcon path={mdiMusicNotePlus} />
      </CreateMusicButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Criar nova música</DialogTitle>
        <DialogContent>
          BlaBla
        </DialogContent>
      </Dialog>
    </MusicListContainer>
  );
}

export default MusicListPage;