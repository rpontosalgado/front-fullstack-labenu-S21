import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MusicNote, QueueMusic } from "@material-ui/icons";

const Navbar = props => {
  const {openNavBar, setOpenNavBar} = props;

  const handleCloseDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenNavBar(false);
  }

  return (
    <Drawer anchor="left" open={openNavBar} onClose={handleCloseDrawer}>
      <List component="nav">
        <ListItem
          button
          // onClick={() => handleClick()}
        >
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary="Music" />
        </ListItem>
        <ListItem
          button
          // onClick={() => handleClick()}
        >
          <ListItemIcon>
            <QueueMusic />
          </ListItemIcon>
          <ListItemText primary="Playlist" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Navbar;