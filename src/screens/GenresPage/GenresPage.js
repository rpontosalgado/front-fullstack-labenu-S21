import React from "react";
import { Divider, ListItemText, Typography } from "@material-ui/core";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { GenresList } from "./styled";
import Loading from "../../components/Loading/Loading";
import { goToGenres } from "../../routes/Coordinator";
import { useHistory } from "react-router-dom";

const GenresPage = () => {
  useProtectedPage();

  const [genresData] = useRequestData({}, '/music/genres');
  const { genres } = genresData;

  const history = useHistory();

  const renderGenres = () => (
    genres.map(genre => (
      <GenresListItem
        key={genre}
        button
        onClick={() => goToGenres(history)}
      >
        <ListItemText
          primary={genre}
        />
      </GenresListItem>
    ))
  );

  return (
    <GenresPageContainer>
      <Typography variant="h2" color="textPrimary" >Gêneros</Typography>
      <Divider />
      <GenresList>
        {genres ? renderGenres() : <Loading />}
      </GenresList>
    </GenresPageContainer>
  )
}

export default GenresPage;