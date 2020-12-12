import axios from "axios";
import { baseUrl } from "../constants/urls";
import { goToMusicList } from "../routes/Coordinator";

export const login = (
  body,
  history,
  setButtonName,
  setOpen,
  setMessage,
  setIsLoading
) => {
  setIsLoading(true);

  axios.post(`${baseUrl}/user/login`, body)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      
      setIsLoading(false);
      
      goToMusicList(history);
      
      setButtonName("Logout");
    })
    .catch(err => {
      setIsLoading(false);
      setOpen(true);

      if (err.response.status === 401) {
        setMessage("Usuário ou senha inválidos");  
      } else {
        setMessage(err.response.data.message);
      }
    });
}

export const signup = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true);

  axios.post(`${baseUrl}/user/signup`, body)
    .then(response => {
      localStorage.setItem("token", response.data.token);

      setIsLoading(false);

      goToMusicList(history);

      setButtonName("Logout");
    })
    .catch(err => {
      setIsLoading(false);
      alert(err.response.data.message)
    });
}