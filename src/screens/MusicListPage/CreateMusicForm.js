import React, { useState } from "react";
import { Button, CircularProgress, DialogActions, TextField, Typography } from "@material-ui/core";
import { mdiFileMusic } from "@mdi/js";
import useForm from "../../hooks/useForm";
import { createMusic } from "../../services/music";
import { GenresInputsContainer, GenresInputsTitle, GenresInputsWrapper, UploadedTrack, UploadedTrackError, UploadTrackIcon } from "./styled";

const CreateMusicForm = props => {
  const [form, handleInputChange] = useForm({
    title: "",
    album: "",
    genre1: "",
    genre2: "",
    genre3: ""
  });

  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [albumError, setAlbumError] = useState(false);
  const [albumErrorMessage, setAlbumErrorMessage] = useState("");
  const [genresError, setGenresError] = useState(false);
  const [genresErrorMessage, setGenresErrorMessage] = useState("");
  const [fileError, setFileError] = useState(false);
  const [fileErrorMessage, setFileErrorMessage] = useState("");


  const selectAndConvertFile = event => {
    setFile(event.target.files[0]);

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => {
      setUrl(reader.result);
    }
  }

  const handleCreateMusicClick = event => {
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
        genres: [form.genre1],
        file: url
      }

      form.genre2 && body.genres.push(form.genre2);
      form.genre3 && body.genres.push(form.genre3);

      createMusic(
        body,
        "/music",
        props.close,
        props.updateMusic,
        props.alert,
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
      
      if (!file) {
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
      <label htmlFor="upload-track">
        <input 
          hidden
          id="upload-track"
          name="upload-track"
          type="file"
          accept="audio/*"
          onChange={selectAndConvertFile}
          required
        />
        <Button
          color={fileError ? "secondary" : "primary"}
          variant="contained"
          component="span"
        >
          <UploadTrackIcon path={mdiFileMusic} />
        </Button>
        <UploadedTrack
          component="span"
          color={fileError ? "error" : "textPrimary"}
        >
          {file.name || "Selecionar arquivo"}
        </UploadedTrack>
        <UploadedTrackError
            variant="caption"
            component="p"
            color="error"
          >
            {fileErrorMessage || undefined}
          </UploadedTrackError>
      </label>
      <DialogActions>
        <Button onClick={props.close} color="secondary" >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={isLoading}
          onClick={handleCreateMusicClick}
        >
          {isLoading ? <CircularProgress color="primary" size={26} /> : "Criar"}
        </Button>
      </DialogActions>
    </form>
  )
}

export default CreateMusicForm;