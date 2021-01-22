import React, { useState } from "react";
import { CardActions, Chip, Typography } from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";
import { AddToPlaylistButton, AudioPlayer, MusicDetailsCardContainer, MusicDetailsGenresContainer, MusicDetailsInfoWrapper } from "./styled";
import AddToPlaylistMenu from "../../components/AddToPlaylistMenu/AddToPlaylistMenu";
import { timePassed } from "../../utils/timePassed";

const MusicDetailsCard = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const RenderGenresList = genres => (
    genres.map((genre, i) => (
      <Chip key={i+1} label={genre} size="small" color="primary" />
    ))
  );

  const handleClickOpenPlaylistsMenu = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClosePlaylistsMenu = () => {
    setAnchorEl(null);
  }

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