import React from "react";
import { useHistory } from "react-router-dom";
import {
  CardActionArea, CardContent, CardMedia, Typography
} from "@material-ui/core";
import { mdiSharkFin } from "@mdi/js";
import {
  PlaceholderIcon, PlaceholderMedia, PlaylistCardContainer
} from "./styled";
import { goToPlaylistDetails } from "../../routes/Coordinator";

const PlaylistCard = props => {
  const history = useHistory();

  const playlistImage = (src) => (
    <CardMedia
      image={src}
      title="Playlist Image"
      height="320"
    />
  );

  const placeholderImage = () => (
    <PlaceholderMedia>
      <PlaceholderIcon path={mdiSharkFin} />
    </PlaceholderMedia>
  );

  return (
    <PlaylistCardContainer>
      <CardActionArea
        onClick={() => goToPlaylistDetails(history, props.playlistId)}
      >
        {props.image ? playlistImage(props.image) : placeholderImage()}
        <CardContent>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          noWrap
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          gutterBottom
          noWrap
        >
          {props.subtitle}
        </Typography>
        <Typography
          variant="body1"
          component="h4"
          gutterBottom
          noWrap
        >
          by {props.creatorName}
        </Typography>
        </CardContent>
      </CardActionArea>
    </PlaylistCardContainer>
  );
};

export default PlaylistCard;