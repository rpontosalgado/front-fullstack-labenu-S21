import React, { useState } from "react";
import useGetUserMusic from "../../hooks/useRequestData";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import MusicCard from "./MusicCard";
import Loading from "../../components/Loading/Loading"
import { MusicListContainer } from "./styled";

const MusicListPage = props => {
  useUnprotectedPage();
  const [open, setOpen] = useState(false);
  const [list, updateList] = useGetUserMusic({}, "/music");

  const music = list.music;

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

  return (
    <MusicListContainer>
      {music ? RenderMusicList() : <Loading />}
    </MusicListContainer>
  );
}

export default MusicListPage;