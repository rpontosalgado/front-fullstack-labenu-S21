import styled from "styled-components";
import { IconButton, List, ListItem } from "@material-ui/core";

export const AlbumMusicPageContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AlbumMusicList = styled(List)`
  width: 80vw;
  max-width: 800px;
  
  li:last-child {
    border-bottom: 2px solid rgba(0, 0, 0, 0.54);
  }
`

export const AlbumMusicListItem = styled(ListItem)`
  border-top: 2px solid rgba(0, 0, 0, 0.54);
`

export const AudioPlayer = styled.audio`
  width: 64vw;
  max-width: 550px;
  margin: 1rem 0;
`

export const AddToPlaylistButton = styled(IconButton)`
  margin-left: auto;
`