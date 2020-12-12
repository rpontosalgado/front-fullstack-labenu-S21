import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import MusicDetailsCard from "./MusicDetailsCard";
import { MusicDetailsContainer } from "./styled";

const MusicDetailsPage = () => {
  useProtectedPage();
  const { id } = useParams();
  const [details, updateDetails] = useRequestData({}, `/music/${id}`);

  const { music } = details;

  const renderMusicDetails = () => (
    <MusicDetailsCard 
      musicId={music.id}
      title={music.title}
      album={music.album}
      file={music.file}
      date={music.date}
      authorName={music.authorName}
      genres={music.genres}
    />
  );

  return (
    <MusicDetailsContainer>
      {music ? renderMusicDetails() : <Loading />}
    </MusicDetailsContainer>
  );
}

export default MusicDetailsPage;