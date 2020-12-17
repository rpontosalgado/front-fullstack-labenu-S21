import styled from "styled-components";
import { Card, CardContent } from "@material-ui/core";


export const MusicDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const MusicDetailsCardContainer = styled(Card)`
  width: 80vw;
  max-width: 800px;
`

export const MusicDetailsInfoWrapper = styled(CardContent)`
  :last-child {
    padding-bottom: 1rem;
  }
`

export const AudioPlayer = styled.audio`
  width: 100%;
  margin: 2rem 0;
`

export const MusicDetailsGenresContainer = styled.div`
  padding-top: 0.65em;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`