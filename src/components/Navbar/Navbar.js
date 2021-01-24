import React from "react";
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import { Album, ChevronLeft, MusicNote, People, QueueMusic, Radio } from "@material-ui/icons";
import { goToAlbums, goToArtists, goToGenres, goToMusicList, goToPlaylists } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0,1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

const Navbar = props => {
  const classes = useStyles();

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
      
      case "genres":
        goToGenres(history);
        break;
      
      case "albums":
        goToAlbums(history);
        break;
      
      case "artists":
        goToArtists(history);
        break;
    
      default:
        break;
    }

    setOpenNavBar(false);
  }

  return (
    <Drawer 
      anchor="left" 
      open={openNavBar} 
      onClose={handleCloseDrawer}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleCloseDrawer}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List component="nav" style={{width: '240px'}} >
        <ListItem
          button
          onClick={() => handleNavItemClick(history, "music")}
        >
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary="Música" />
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
        <Divider />
        <ListItem
          button
          onClick={() => handleNavItemClick(history, "genres")}
        >
          <ListItemIcon>
            <Radio />
          </ListItemIcon>
          <ListItemText primary="Gêneros" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavItemClick(history, "albums")}
        >
          <ListItemIcon>
            <Album />
          </ListItemIcon>
          <ListItemText primary="Álbuns" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavItemClick(history, "artists")}
        >
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Artistas" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Navbar;