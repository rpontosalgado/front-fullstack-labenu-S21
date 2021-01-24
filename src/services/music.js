import axios from "axios";
import { baseUrl } from "../constants/urls";

export const createMusic = (
  body,
  endpoint,
  closeDialog,
  updateMusic,
  throwAlert,
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
      throwAlert("success", "Música criada!");
      setIsLoading(false);
    })
    .catch(err => {
      setIsLoading(false);

      switch (err.response.status) {
        case 409:
          throwAlert(
            "error",
            "Este album já tem uma música com este título"
          );
          break;
        case 413:
          throwAlert(
            "error",
            "Arquivo maior do que tamanho máximo permitido"
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
};