import axios from "axios";
import { baseUrl } from "../constants/urls";

export const getData = (endpoint, setData) => {
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