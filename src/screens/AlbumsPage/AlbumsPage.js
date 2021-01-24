import React from "react";
import { Divider, ListItemText, Typography } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import { useHistory } from "react-router-dom";
import { AlbumsList, AlbumsListItem, AlbumsPageContainer } from "./styled";
import { goToAlbumMusic } from "../../routes/Coordinator";

const AlbumsPage = () => {
  useProtectedPage();

  const [albumsData] = useRequestData({}, '/albums');
  const { albums } = albumsData;

  const history = useHistory();

  const renderAlbums = () => (
    albums.map(item => (
      <AlbumsListItem
        key={item.album}
        button
        onClick={() => goToAlbumMusic(history, item.album)}
      >
        <ListItemText
          primary={item.album}
          secondary={`by ${item.artist}`}
        />
      </AlbumsListItem>
    ))
  );

  return (
    <AlbumsPageContainer>
      <Typography variant="h2" color="textPrimary" >Álbuns</Typography>
      <Divider />
      <AlbumsList>
        {albums ? renderAlbums() : <Loading />}
      </AlbumsList>
    </AlbumsPageContainer>
  )
}

export default AlbumsPage;