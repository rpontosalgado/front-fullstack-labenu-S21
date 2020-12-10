import React from "react";
import { MusicDetailsCardContainer, MusicDetailsGenresContainer, MusicDetailsInfoWrapper } from "./styled";

const MusicDetailsCard = props => {

  const RenderGenresList = genres => (
    genres.map((genre, i) => (
      <Chip key={i+1} label={genre} size="small" color="primary" />
    ))
  );

  return (
    <MusicDetailsCardContainer>
      <MusicDetailsInfoWrapper>
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
        <MusicDetailsGenresContainer>
          {RenderGenresList(props.genres)}
        </MusicDetailsGenresContainer>
      </MusicDetailsInfoWrapper>
    </MusicDetailsCardContainer>
  );
}

export default MusicDetailsCard;