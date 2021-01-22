import React from "react";
import { Chip, Typography } from "@material-ui/core";
import { AudioPlayer, MusicDetailsCardContainer, MusicDetailsGenresContainer, MusicDetailsInfoWrapper } from "./styled";
import { timePassed } from "../../utils/timePassed";

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
        <MusicDetailsGenresContainer>
          {RenderGenresList(props.genres)}
        </MusicDetailsGenresContainer>
      </MusicDetailsInfoWrapper>
      <CardActions>
        <AddToPlaylistButton
          aria-label="add to playlist"
          aria-controls="playlists-menu"
          aria-haspopup="true"
          onClick={handleClickOpenPlaylistsMenu}
        >
          <PlaylistAdd />
        </AddToPlaylistButton>
        <AddToPlaylistMenu 
          anchorEl={anchorEl}
          open={open}
          close={handleClosePlaylistsMenu}
          musicId={props.musicId}
          alert={props.alert}
        />
      </CardActions>
    </MusicDetailsCardContainer>
  );
}

export default MusicDetailsCard;