import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { addMusicToPlaylist } from "../../services/playlist";

const AddToPlaylistMenu = props => {
  const RenderPlaylists = () => (
    props.playlist.map(item => (
      <MenuItem
        key={item.id}
        onClick={() => handleClickAddToPlaylist(item.id)}
      >
        {item.title}
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
      props.close,
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
          maxHeight: "13rem",
          width: '32ch'
        }
      }}
    >
      {RenderPlaylists}
    </Menu>
  )
}

export default AddToPlaylistMenu;