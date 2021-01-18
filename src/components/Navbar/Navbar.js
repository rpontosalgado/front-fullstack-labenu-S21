import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MusicNote, QueueMusic } from "@material-ui/icons";
import { goToMusicList } from "../../routes/Coordinator";

const Navbar = props => {
  const {openNavBar, setOpenNavBar} = props;

  const history = useHistory();

  const handleCloseDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenNavBar(false);
  }

  const handleNavItemClick = (history, screen) => {
    switch (screen) {
      case "music":
        goToMusicList(history);
        break;
      
      case "playlist":
        goToPlaylists(history);
        break;
    
      default:
        break;
    }

    setOpenNavBar(false);
  }

  return (
    <Drawer anchor="left" open={openNavBar} onClose={handleCloseDrawer}>
      <List component="nav">
        <ListItem
          button
          onClick={() => handleNavItemClick(history, "music")}
        >
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary="Music" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavItemClick(history, "playlist")}
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