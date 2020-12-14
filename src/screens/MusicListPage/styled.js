import { Card, CardContent, Fab } from "@material-ui/core";
import styled from "styled-components";

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
  cursor: pointer;
`

export const MusicInfoWrapper = styled(CardContent)`
  :last-child {
    padding-bottom: 1rem;
  }
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