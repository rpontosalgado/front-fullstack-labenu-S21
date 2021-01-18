import React from "react";
import { CardActionArea, CardContent, CardMedia } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { PlaceholderMedia, PlaylistCardContainer } from "./styled";
import { mdiSharkFin } from "@mdi/js";

const PlaylistCard = props => {
  const history = useHistory();

  const playlistImage = (src) => (
    <CardMedia
      image={src}
      title="Playlist Image"
      height="240"
    />
  )

  const placeholderImage = () => (
    <PlaceholderMedia>
      <PlaceholderIcon path={mdiSharkFin} />
    </PlaceholderMedia>
  )

  return (
    <PlaylistCardContainer>
      <CardActionArea
        onClick={() => goToPlaylistDetails(history, props.playlistId)}
      >
        {props.image ? playlistImage(props.image) : placeholderImage}
        <CardContent>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
        >
          {props.subtitle}
        </Typography>
        <Typography
          variant="body1"
          component="h4"
          gutterBottom
        >
          {props.creatorName}
        </Typography>
        </CardContent>
      </CardActionArea>
    </PlaylistCardContainer>
  );
}

export default PlaylistCard;