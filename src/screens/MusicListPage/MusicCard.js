import React from "react";
import { Chip, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToMusicDetails } from "../../routes/Coordinator";
import { timePassed } from "../../utils/timePassed";
import { MusicCardContainer, MusicInfoWrapper } from "./styled";

const MusicCard = props => {
  const history = useHistory();

  const RenderGenresList = genres => (
    genres.map((genre, i) => (
      <Chip key={i+1} label={genre} size="small" color="primary" />
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
        <Typography variant="caption" color="textSecondary" >
          {props.file}
        </Typography>
        <Typography variant="h6" component="h3" align="center" >
          {props.title}
        </Typography>
        <Typography align="center" >
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