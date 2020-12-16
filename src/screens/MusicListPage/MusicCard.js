import React from "react";
import { Chip, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToMusicDetails } from "../../routes/Coordinator";
import { timePassed } from "../../utils/timePassed";
import { GenresContainer, MusicCardContainer, MusicInfoWrapper } from "./styled";

const MusicCard = props => {
  const history = useHistory();

  const RenderGenresList = genres => (
    genres.map((genre) => (
      <Chip key={genre} label={genre} size="small" color="primary" />
    ))
  );
  
  return (
    <MusicCardContainer>
      <MusicInfoWrapper
        onClick={() => goToMusicDetails(history, props.musicId)}
      >
        <Typography variant="body2" color="textSecondary" >
          {timePassed(props.date)}
        </Typography>
        <img src={props.file}/>
        <Typography variant="h6" component="h3" align="center" >
          {props.title}
        </Typography>
        <Typography align="center" gutterBottom>
          {props.authorName} · {props.album}
        </Typography>
        <GenresContainer>
          {RenderGenresList(props.genres)}
        </GenresContainer>
      </MusicInfoWrapper>
    </MusicCardContainer>
  );
}

export default MusicCard;