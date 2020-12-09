export const goToLogin = (history) => {
  history.push("/login");
}

export const goToSignup = (history) => {
  history.push("/signup");
}

export const goToMusicList = (history) => {
  history.push("/music");
}

export const goToMusicDetails = (history, id) => {
  history.push(`/music/${id}`)
}