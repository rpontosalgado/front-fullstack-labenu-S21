import { Card } from "@material-ui/core";
import styled from "styled-components";

export const MusicDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const MusicDetailsCardContainer = styled(Card)`
  width: 80vw;
  max-width: 800px;
  margin: 10px;
`

export const MusicDetailsInfoWrapper = styled(CardContent)`
  padding: 0.5rem;
`

export const MusicDetailsGenresContainer = styled.div`
  display: flex;
`