import styled from "styled-components";
import { Card, CardContent, Fab, IconButton, Typography } from "@material-ui/core";
import Icon from "@mdi/react";

export const MusicListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px;
`

export const MusicCardContainer = styled(Card)`
  width: 320px;
`

export const MusicInfoWrapper = styled(CardContent)`
  :last-child {
    padding-bottom: 1rem;
  }
`

export const AudioPlayer = styled.audio`
  width: 100%;
  margin: 2rem 0;
`

export const GenresContainer = styled.div`
  padding-top: 0.65em;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

export const CreateMusicButton = styled(Fab)`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
`

export const CreateMusicIcon = styled(Icon)`
  display: block;
  height: 2rem;
`

export const GenresInputsContainer = styled.div`
  display: flex;
  margin: 1rem 0;

  @media(max-width: 400px) {
    flex-direction: column;
  }
`

export const GenresInputsTitle = styled.div`
  padding: 1rem 0.65rem 0;

  @media(max-width: 400px) {
    padding: 0 0.65rem;
  }
`

export const GenresInputsWrapper = styled.div`
  @media(max-width: 400px) {
    margin-left: 20%;
  }
`

export const UploadTrackIcon = styled(Icon)`
  display: block;
  height: 2rem;
`

export const UploadedTrack = styled(Typography)`
  margin-left: 0.65rem;
`

export const UploadedTrackError = styled(Typography)`
  margin-top: 0.65rem;
  margin-left: 0.65rem;
`

export const AddToPlaylistButton = styled(IconButton)`
  margin-left: auto;
`