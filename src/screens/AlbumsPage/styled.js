import styled from "styled-components";
import { List, ListItem } from "@material-ui/core";

export const AlbumsPageContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AlbumsList = styled(List)`
  width: 80vw;
  max-width: 800px;
  
  div:last-child {
    border-bottom: 2px solid rgba(0, 0, 0, 0.54);
  }
`

export const AlbumsListItem = styled(ListItem)`
  border-top: 2px solid rgba(0, 0, 0, 0.54);
`