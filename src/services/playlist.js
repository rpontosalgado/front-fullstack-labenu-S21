import axios from "axios";
import { baseUrl } from "../constants/urls"

export const createPlaylist = (
  body,
  endpoint,
  closeDialog,
  updatePlaylists,
  throwError,
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
      setIsLoading(false);
    })
    .catch(err => {
      setIsLoading(false);

      throwError("Não foi possível criar playlist")
    });
}