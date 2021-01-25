import React from "react";
import { useHistory } from "react-router-dom";
import { Divider, ListItemText, Typography } from "@material-ui/core";
import { ArtistsList, ArtistsListItem, ArtistsPageContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToArtistMusic } from "../../routes/Coordinator";

const ArtistsPage = () => {
  useProtectedPage();

  const [artistsData] = useRequestData({}, '/artists');
  const { artists } = artistsData;

  const history = useHistory();

  const renderArtists = () => (
    artists.map(artist => (
      <ArtistsListItem
        key={artist}
        button
        onClick={() => goToArtistMusic(history, artist)}
      >
        <ListItemText
          primary={artist}
        />
      </ArtistsListItem>
    ))
  );

  return (
    <ArtistsPageContainer>
      <Typography variant="h2" color="textPrimary" >Artistas</Typography>
      <Divider />
      <ArtistsList>
        {artists ? renderArtists() : <Loading />}
      </ArtistsList>
    </ArtistsPageContainer>
  );
};

export default ArtistsPage;