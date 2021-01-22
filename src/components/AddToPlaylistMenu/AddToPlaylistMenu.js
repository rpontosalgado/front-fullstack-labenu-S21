import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import useRequestData from "../../hooks/useRequestData";
import { addMusicToPlaylist } from "../../services/playlist";

const AddToPlaylistMenu = props => {
  const [data] = useRequestData({}, "/playlist");

  const playlists = data.playlist;

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
    <Menu
      anchorEl={props.anchorEl}
      keepMounted
      open={props.open}
      onClose={props.close}
      PaperProps={{
        style: {
          maxHeight: 216,
          width: '32ch'
        }
      }}
    >
      {RenderPlaylists}
    </Menu>
  )
}

export default AddToPlaylistMenu;