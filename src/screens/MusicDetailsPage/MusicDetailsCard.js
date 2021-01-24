import React from "react";
import { CardActions, Chip, Typography } from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";
import {
  AddToPlaylistButton,
  AudioPlayer,
  MusicDetailsCardContainer,
  MusicDetailsGenresContainer,
  MusicDetailsInfoWrapper
} from "./styled";
import { goToArtistMusic } from "../../routes/Coordinator";
import { timePassed } from "../../utils/timePassed";

const MusicDetailsCard = props => {
  
  const RenderGenresList = genres => (
    genres.map((genre, i) => (
      <Chip
        key={i+1}
        label={genre}
        size="small"
        color="primary"
        onClick={() => goToGenreMusic(history, genre)}
      />
    ))
  );

  return (
    <MusicDetailsCardContainer>
      <MusicDetailsInfoWrapper>
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
          style={{cursor: "pointer"}}
          onClick={() => goToArtistMusic(history, props.authorName)}
        >
          {props.authorName}
        </Typography>
        <Typography
          variant="body1"
          component="h4"
          align="center"
          gutterBottom
          style={{cursor: "pointer"}}
          onClick={() => goToAlbumMusic(history, props.album)}
        >
          {props.album}
        </Typography>
        <MusicDetailsGenresContainer>
          {RenderGenresList(props.genres)}
        </MusicDetailsGenresContainer>
      </MusicDetailsInfoWrapper>
      <CardActions>
        <AddToPlaylistButton
          aria-label="add to playlist"
          aria-controls="playlists-menu"
          aria-haspopup="true"
          onClick={props.openMenu}
        >
          <PlaylistAdd />
        </AddToPlaylistButton>
      </CardActions>
    </MusicDetailsCardContainer>
  );
};

export default MusicDetailsCard;