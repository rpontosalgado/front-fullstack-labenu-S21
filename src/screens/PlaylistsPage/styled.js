import styled from "styled-components";
import { Card, Fab } from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";
import Icon from "@mdi/react";

export const PlaylistsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlaylistsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px;
`

export const CreatePlaylistButton = styled(Fab)`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
`

export const CreatePlaylistIcon = styled(PlaylistAdd)`
  display: block;
  height: 2rem;
`

export const PlaylistCardContainer = styled(Card)`
  width: 240px;
`

export const PlaceholderMedia = styled.div`
  height: 240px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlaceholderIcon = styled(Icon)`
  display: block;
  color: rgba(0, 0, 0, 0.87);
  width: 120px;
`

export const UploadImageIcon = styled(Icon)`
  display: block;
  height: 2rem;
`

export const UploadedImage = styled(Typography)`
  margin-left: 0.65rem;
`