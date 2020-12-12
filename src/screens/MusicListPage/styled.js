import { Card, CardContent } from "@material-ui/core";
import styled from "styled-components";

export const MusicListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const MusicCardContainer = styled(Card)`
  width: 80vw;
  max-width: 800px;
  margin: 10px;
`

export const MusicInfoWrapper = styled(CardContent)`
  padding: 0.5rem;
`

export const GenresContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`