import axios from "axios";
import { baseUrl } from "../constants/urls";
import { goToMusicList } from "../routes/Coordinator";

export const login = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true);

  axios.post(`${baseUrl}/user/login`, body)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      
      setIsLoading(false);
      
      goToMusicList(history);
      
      setButtonName("Logout");
    })
    .catch(err => alert("Falha no login, tente novamente"))
}