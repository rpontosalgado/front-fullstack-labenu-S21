export const goToLogin = (history) => {
  history.push("/user/login");
};

export const goToSignup = (history) => {
  history.push("/user/signup");
};

export const goToMusicList = (history) => {
  history.push("/music");
};

export const goToMusicDetails = (history, id) => {
  history.push(`/music/${id}`);
};

export const goToPlaylists = (history) => {
  history.push("/playlist");
};

export const goToPlaylistDetails = (history, id) => {
  history.push(`/playlist/${id}`);
};

export const goToGenres = (history) => {
  history.push("/genres");
};

export const goToGenreMusic = (history, genre) => {
  history.push(`/genres/${genre}`);
};

export const goToAlbums = (history) => {
  history.push("/albums");
};

export const goToAlbumMusic = (history, album) => {
  history.push(`/albums/${album}`);
};

export const goToArtists = (history) => {
  history.push("/artists");
};

export const goToArtistMusic = (history, artist) => {
  history.push(`/artists/${artist}`);
};