import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AlertPop from "../../components/AlertPop/AlertPop";
import Loading from "../../components/Loading/Loading";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import MusicDetailsCard from "./MusicDetailsCard";
import { MusicDetailsContainer } from "./styled";

const MusicDetailsPage = () => {
  useProtectedPage();
  
  const { id } = useParams();

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: ""
  });
  
  const [details] = useRequestData({}, `/music/${id}`);

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
      alert={handleAlert}
    />
  );

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

  return (
    <MusicDetailsContainer>
      {music ? renderMusicDetails() : <Loading />}
      <AlertPop
        close={handleCloseAlert}
        alert={alert}
      />
    </MusicDetailsContainer>
  );
}

export default MusicDetailsPage;