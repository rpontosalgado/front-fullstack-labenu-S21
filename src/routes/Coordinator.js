export const goToLogin = (history) => {
  history.push("/user/login");
}

export const goToSignup = (history) => {
  history.push("/user/signup");
}

export const goToMusicList = (history) => {
  history.push("/music");
}

export const goToGenres = (history) => {
  history.push("/music/genres");
}

export const goToGenreMusic = (history, genre) => {
  history.push(`/music/genre/${genre}`);
}

export const goToMusicDetails = (history, id) => {
  history.push(`/music/${id}`)
}

export const goToPlaylists = (history) => {
  history.push("/playlist")
}

export const goToPlaylistDetails = (history, id) => {
  history.push(`/playlist/${id}`)
}