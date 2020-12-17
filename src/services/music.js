import axios from "axios";
import { baseUrl } from "../constants/urls";

export const getUserMusic = (endpoint, setData) => {
  const token = localStorage.getItem("token");

  if (token) {
    axios.get(`${baseUrl}${endpoint}`, {
      headers: {
        Authorization: token
      }
    })
      .then(response => setData(response.data))
      .catch(err => console.log(err.response.data.message));
  }
}

export const createMusic = (
  body,
  endpoint,
  closeDialog,
  updateList,
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
      updateList();
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