import React from "react";
import { useHistory } from "react-router-dom";
import { CardActions, Chip, Typography } from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";
import { goToMusicDetails } from "../../routes/Coordinator";
import { timePassed } from "../../utils/timePassed";
import { AddToPlaylistButton, AudioPlayer, GenresContainer, MusicCardContainer, MusicInfoWrapper } from "./styled";

const MusicCard = props => {
  const history = useHistory();

  const RenderGenresList = genres => (
    genres.map((genre) => (
      <Chip key={genre} label={genre} size="small" color="primary" />
    ))
  );

  const setMusicIdAndOpenMenu = event => {
    props.setMusicToPlaylistId(props.musicId);
    props.openMenu(event);
  }
  
  return (
    <MusicCardContainer>
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
          style={{cursor: "pointer"}}
          onClick={() => goToMusicDetails(history, props.musicId)}
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
      <CardActions>
        <AddToPlaylistButton
          aria-label="add to playlist"
          aria-controls="playlists-menu"
          aria-haspopup="true"
          onClick={setMusicIdAndOpenMenu}
        >
          <PlaylistAdd />
        </AddToPlaylistButton>
      </CardActions>
    </MusicCardContainer>
  );
}

export default MusicCard;