import React from "react";
import { useHistory } from "react-router-dom";
import { CardActions, Chip, Menu, MenuItem, Typography } from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";
import { goToMusicDetails } from "../../routes/Coordinator";
import { timePassed } from "../../utils/timePassed";
import { AudioPlayer, GenresContainer, MusicCardContainer, MusicInfoWrapper } from "./styled";
import useRequestData from "../../hooks/useRequestData";

const MusicCard = props => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [data] = useRequestData({}, "/playlist");

  const playlists = data.playlist;

  const RenderGenresList = genres => (
    genres.map((genre) => (
      <Chip key={genre} label={genre} size="small" color="primary" />
    ))
  );

  const RenderPlaylists = () => (
    playlists.map(playlist => (
      <MenuItem
        key={playlist.id}
        onClick={() => handleClickAddToPlaylist(playlist.id)}
      >
        {playlist.title}
      </MenuItem>
    ))
  );

  const handleClickOpenPlaylistsMenu = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClosePlaylistsMenu = () => {
    setAnchorEl(null);
  }

  const handleClickAddToPlaylist = (playlistId) => {
    const body = {
      playlistId,
      musicId: props.musicId
    }

    addMusicToPlaylist(
      body,
      "/playlist/music",
      handleClosePlaylistsMenu,
      props.alert
    );
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
        <CardActions>
          <AddToPlaylistButton
            aria-label="add to playlist"
            aria-controls="playlists-menu"
            aria-haspopup="true"
            onClick={handleClickOpenPlaylistsMenu}
          >
            <PlaylistAdd />
          </AddToPlaylistButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClosePlaylistsMenu}
            PaperProps={{
              style: {
                maxHeight: 216,
                width: '32ch'
              }
            }}
          >
            {RenderPlaylists}
          </Menu>
        </CardActions>
      </MusicInfoWrapper>
    </MusicCardContainer>
  );
}

export default MusicCard;