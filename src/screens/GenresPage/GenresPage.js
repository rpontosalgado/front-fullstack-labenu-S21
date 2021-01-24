import React from "react";
import { useHistory } from "react-router-dom";
import { Divider, ListItemText, Typography } from "@material-ui/core";
import { GenresList, GenresListItem, GenresPageContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToGenreMusic } from "../../routes/Coordinator";

const GenresPage = () => {
  useProtectedPage();

  const [genresData] = useRequestData({}, '/genres');
  const { genres } = genresData;

  const history = useHistory();

  const renderGenres = () => (
    genres.map(genre => (
      <GenresListItem
        key={genre}
        button
        onClick={() => goToGenreMusic(history, genre)}
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
  );
};

export default GenresPage;