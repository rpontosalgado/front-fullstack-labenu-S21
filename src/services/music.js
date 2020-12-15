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

      switch (err.response.data.message) {
        case "This album already has a music with this title":
          throwError("Este album já tem uma música com este título");
          break;
        case "This file has already been uploaded":
          throwError("Já existe uma música com o mesmo arquivo");
          break;
        default:
          throwError(err.response.data.message)
          break;
      }
    });
}