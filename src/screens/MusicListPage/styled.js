import { Card, CardContent, Fab, Typography } from "@material-ui/core";
import Icon from "@mdi/react";
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
  padding: 0 0.65rem;
`

export const GenresInputsWrapper = styled.div`
  @media(max-width: 400px) {
    margin-left: 20%;
  }
`