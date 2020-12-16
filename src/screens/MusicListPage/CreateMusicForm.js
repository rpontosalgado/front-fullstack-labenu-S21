import { Button, CircularProgress, DialogActions, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { createMusic } from "../../services/music";
import { GenresInputsContainer, GenresInputsTitle, GenresInputsWrapper } from "./styled";

const CreateMusicForm = props => {
  const [form, handleInputChange] = useForm({
    title: "",
    album: "",
    genre1: "",
    genre2: "",
    genre3: "",
    file: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [albumError, setAlbumError] = useState(false);
  const [albumErrorMessage, setAlbumErrorMessage] = useState("");
  const [genresError, setGenresError] = useState(false);
  const [genresErrorMessage, setGenresErrorMessage] = useState("");
  const [fileError, setFileError] = useState(false);
  const [fileErrorMessage, setFileErrorMessage] = useState("");

  const onClickCreateMusic = event => {
    event.preventDefault();

    setTitleError(false);
    setTitleErrorMessage("");
    setAlbumError(false);
    setAlbumErrorMessage("");
    setGenresError(false);
    setFileError(false);
    setFileErrorMessage("");

    const element = document.getElementById("create-music-form");

    const isValid = element.checkValidity();

    if (isValid) {
      const body = {
        title: form.title,
        album: form.album,
        genres: [form.genre1, form.genre2, form.genre3],
        file: form.file
      }

      createMusic(
        body,
        "/music",
        props.handleCloseCreateMusic,
        props.updateList,
        props.handleCreateMusicError,
        setIsLoading
      );
    } else {
      if (!form.title) {
        setTitleError(true);
        setTitleErrorMessage("Favor informar um título");
      }
      
      if (!form.album) {
        setAlbumError(true);
        setAlbumErrorMessage("Favor informar um álbum");
      }
      
      if (!form.genre1) {
        setGenresError(true);
        setGenresErrorMessage("Insira pelo menos um gênero");
      }
      
      if (!form.file) {
        setFileError(true);
        setFileErrorMessage("É preciso inserir um arquivo");
      }
    }
  }

  return (
    <form id="create-music-form" >
      <TextField
        value={form.title}
        name='title'
        label='Título'
        onChange={handleInputChange}
        error={titleError}
        helperText={titleErrorMessage}
        variant='outlined'
        margin='dense'
        fullWidth
        autoFocus
        required
      />
      <TextField
        value={form.album}
        name='album'
        label='Álbum'
        onChange={handleInputChange}
        error={albumError}
        helperText={albumErrorMessage}
        variant='outlined'
        margin='dense'
        fullWidth
        required
      />
      <GenresInputsContainer>
        <GenresInputsTitle>
          <Typography
            color={genresError ? "error" : "textPrimary"}
          >
            Gêneros
          </Typography>
          <Typography
            variant="caption"
            color={genresError ? "error" : "textSecondary"}
          >
            Insira pelo menos <em>um</em> gênero
          </Typography>
        </GenresInputsTitle>
        <GenresInputsWrapper>
          <TextField
            value={form.genre1}
            name='genre1'
            onChange={handleInputChange}
            error={genresError}
            helperText={genresErrorMessage}
            variant='outlined'
            margin='dense'
            fullWidth
            required
          />
          <TextField
            value={form.genre2}
            name='genre2'
            onChange={handleInputChange}
            variant='outlined'
            margin='dense'
            fullWidth
          />
          <TextField
            value={form.genre3}
            name='genre3'
            onChange={handleInputChange}
            variant='outlined'
            margin='dense'
            fullWidth
          />
        </GenresInputsWrapper>
      </GenresInputsContainer>
      <TextField
        value={form.file}
        name='file'
        type='file'
        // label='Arquivo'
        onChange={handleInputChange}
        error={fileError}
        helperText={fileErrorMessage}
        variant='outlined'
        margin='dense'
        fullWidth
        required
      />
      <DialogActions>
        <Button onClick={props.handleCloseCreateMusic} color="secondary" >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={isLoading}
          onClick={onClickCreateMusic}
        >
          {isLoading ? <CircularProgress color="primary" size={26} /> : "Criar"}
        </Button>
      </DialogActions>
    </form>
  )
}

export default CreateMusicForm;