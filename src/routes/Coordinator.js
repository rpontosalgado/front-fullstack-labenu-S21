export const goToLogin = (history) => {
  history.push("/user/login");
}

export const goToSignup = (history) => {
  history.push("/user/signup");
}

export const goToMusicList = (history) => {
  history.push("/music");
}

export const goToMusicDetails = (history, id) => {
  history.push(`/music/${id}`)
}