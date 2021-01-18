import axios from "axios";
import { baseUrl } from "../constants/urls";

export const createMusic = (
  body,
  endpoint,
  closeDialog,
  updateMusic,
  throwError,
  setIsLoading
) => {
  setIsLoading(true);

  axios.post(`${baseUrl}${endpoint}`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(() => {
      closeDialog();
      updateMusic();
      setIsLoading(false);
    })
    .catch(err => {
      setIsLoading(false);

      throwError("Este album já tem uma música com este título");

      switch (err.response.status) {
        case 409:
          throwError("Este album já tem uma música com este título");
          break;
        case 413:
          throwError("Arquivo maior do que tamanho máximo permitido");
          break;
        default:
          throwError(err.response.data.message)
          break;
      }
    });
}