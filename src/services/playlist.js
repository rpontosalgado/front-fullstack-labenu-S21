import axios from "axios";
import { baseUrl } from "../constants/urls"

export const createPlaylist = (
  body,
  endpoint,
  closeDialog,
  updatePlaylists,
  throwAlert,
  setIsLoading
) => {
  setIsLoading(true);

  axios.put(`${baseUrl}${endpoint}`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(() => {
      closeDialog();
      updatePlaylists();
      throwAlert("success", "Playlist criada!");
      setIsLoading(false);
    })
    .catch(err => {
      setIsLoading(false);

      switch (err.response.status) {
        case 409:
          throwAlert(
            "error",
            "Já foi criada uma playlist com este título"
          );
          break;
        default:
          throwAlert(
            "error",
            err.response.data.message
          );
          break;
      }
    });
}

export const addMusicToPlaylist = (body, endpoint, closeMenu, throwAlert) => {
  axios.put(`${baseUrl}${endpoint}`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(() => {
      closeMenu();
      throwAlert("success", "Música adicionada na playlist")
    })
    .catch(err => {
      throwAlert(
        "error",
        "Este album já tem uma música com este título"
      );

      switch (err.response.status) {
        case 409:
          throwAlert(
            "error",
            "Esta música já está nessa playlist"
          );
          break;
        default:
          throwAlert(
            "error",
            err.response.data.message
          );
          break;
      }
    });
}

export const deleteMusicFromPlaylist = (endpoint, update, alert) => {
  axios.delete(`${baseUrl}${endpoint}`, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(() => {
      update();
      alert("success", "Música removida da playlist");
    })
    .catch(err => {
      alert("error", err.response.message);
    });
}