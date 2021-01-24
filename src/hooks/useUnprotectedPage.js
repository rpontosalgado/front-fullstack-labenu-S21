import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToMusicList } from "../routes/Coordinator";

const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToMusicList(history);
    }
  }, [history])
};

export default useUnprotectedPage;