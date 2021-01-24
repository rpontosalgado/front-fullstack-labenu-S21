import React from "react";
import { Divider, ListItemText, Typography } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { ArtistsList, ArtistsListItem, ArtistsPageContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import { goToArtistMusic } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

const ArtistsPage = () => {
  useProtectedPage();

  const [artistsData] = useRequestData({}, '/genres');
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
      <Typography variant="h2" color="textPrimary" >Gêneros</Typography>
      <Divider />
      <ArtistsList>
        {artists ? renderArtists() : <Loading />}
      </ArtistsList>
    </ArtistsPageContainer>
  )
}

export default ArtistsPage;