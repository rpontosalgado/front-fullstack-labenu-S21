const { useLayoutEffect } = require("react");
const { useHistory } = require("react-router-dom");
const { goToLogin } = require("../routes/Coordinator");

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      goToLogin(history);
    }
  }, [history]);
}

export default useProtectedPage;