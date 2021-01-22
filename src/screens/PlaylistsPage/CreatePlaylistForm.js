import React, { useState } from "react";
import { Button, CircularProgress, DialogActions, TextField } from "@material-ui/core";
import { UploadedImage, UploadImageIcon } from "./styled";
import { mdiFileImage } from "@mdi/js";
import useForm from "../../hooks/useForm";
import { createPlaylist } from "../../services/playlist";

const CreatePlaylistForm = props => {
  const [form, handleInputChange] = useForm({
    title: "",
    subtitle: "",
    image: ""
  });

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [titleErrorMessage, setTitleErrorMessage] = useState("");

  const selectAndConvertImage = event => {
    setImage(event.target.files[0]);

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => {
      setUrl(reader.result);
    }
  }

  const handleCreatePlaylistClick = event => {
    event.preventDefault();

    setTitleError(false);
    setTitleErrorMessage("");

    const element = document.getElementById("create-playlist-form");

    const isValid = element.checkValidity();

    if (isValid) {
      const body = {
        title: form.title,
        subtitle: form.subtitle,
        image: url
      }

      createPlaylist(
        body,
        "/playlist",
        props.close,
        props.updatePlaylists,
        props.error,
        setIsLoading
      );
    } else {
      if (!form.title) {
        setTitleError(true);
        setTitleErrorMessage("Favor informar um título");
      }
    }
  }

  return (
    <form id="create-playlist-form">
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
        value={form.subtitle}
        name='subtitle'
        label='Subtítulo'
        onChange={handleInputChange}
        variant='outlined'
        margin='dense'
        fullWidth
      />
      <label htmlFor="upload-image">
        <input
          hidden
          id="upload-image"
          name="upload-image"
          type="file"
          accept="image/*"
          onChange={selectAndConvertImage}
        />
        <Button
          color="primary"
          variant="contained"
          component="span"
        >
          <UploadImageIcon path={mdiFileImage} />
        </Button>
        <UploadedImage>
          {image.name || "Selecionar imagem"}
        </UploadedImage>
      </label>
      <DialogActions>
        <Button onClick={props.handleCloseCreatePlaylist} color="secondary" >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={isLoading}
          onClick={handleCreatePlaylistClick}
        >
          {isLoading ? <CircularProgress color="primary" size={26} /> : "Criar"}
        </Button>
      </DialogActions>
    </form>
  )
}

export default CreatePlaylistForm;