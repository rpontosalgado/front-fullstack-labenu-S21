import styled from "styled-components";
import { List, ListItem, Paper } from "@material-ui/core";
import Icon from "@mdi/react";

export const PlaylistDetailsPageContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlaylistImage = styled.img`
  object-fit: cover;
  width: 320px;
  height: 320px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const PlaceholderMedia = styled(Paper)`
  height: 320px;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlaceholderIcon = styled(Icon)`
  display: block;
  color: rgba(0, 0, 0, 0.54);
  width: 120px;
`

export const PlaylistMusic = styled(List)`
  width: 80vw;
  max-width: 800px;
  
  li:last-child {
    border-bottom: 2px solid rgba(0, 0, 0, 0.54);
  }
`

export const PlaylistMusicItem = styled(ListItem)`
  border-top: 2px solid rgba(0, 0, 0, 0.54);
`

export const AudioPlayer = styled.audio`
  width: 64vw;
  max-width: 550px;
  margin: 1rem 0;
`