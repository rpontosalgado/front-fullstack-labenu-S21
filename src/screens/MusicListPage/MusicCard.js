import React from "react";
import { useHistory } from "react-router-dom";
import { Chip, Typography } from "@material-ui/core";
import { goToMusicDetails } from "../../routes/Coordinator";
import { timePassed } from "../../utils/timePassed";
import { AudioPlayer, GenresContainer, MusicCardContainer, MusicInfoWrapper } from "./styled";

const MusicCard = props => {
  const history = useHistory();

  const RenderGenresList = genres => (
    genres.map((genre) => (
      <Chip key={genre} label={genre} size="small" color="primary" />
    ))
  );
  
  return (
    <MusicCardContainer
      onClick={() => goToMusicDetails(history, props.musicId)}
    >
      <MusicInfoWrapper>
        <Typography variant="body2" color="textSecondary" >
          {timePassed(props.date)}
        </Typography>
        <AudioPlayer controls preload="auto">
          <source src={props.file}/>
          Seu navegador não suporta o elemento de audio
        </AudioPlayer>
        <Typography
          variant="h6"
          component="h3"
          align="center"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          align="center"
        >
          {props.authorName}
        </Typography>
        <Typography
          variant="body1"
          component="h4"
          align="center"
          gutterBottom
        >
          {props.album}
        </Typography>
        <GenresContainer>
          {RenderGenresList(props.genres)}
        </GenresContainer>
      </MusicInfoWrapper>
    </MusicCardContainer>
  );
}

export default MusicCard;