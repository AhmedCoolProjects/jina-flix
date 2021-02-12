/** @format */

import React, { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

function TraillerScreen_({
  movie_name,
  rate_,
  raters_,
  overview_,
  releaseDate_,
}) {
  const [traillerId, setTraillerId] = useState(null);
  const opts = {
    width: "100%",
    position: "relative",
    minHeight: "65%",
    playerVars: {
      autoplay: 1,
    },
  };
  movieTrailer(movie_name)
    .then((url) => {
      const urlParams = new URLSearchParams(new URL(url).search);
      setTraillerId(urlParams.get("v"));
    })
    .catch((error) => console.log(error));
  return (
    <div
      style={{
        width: "100%",
        flex: 1,
        position: "relative",
        backgroundColor: "black",
      }}>
      {traillerId === undefined ? null : (
        <YouTube videoId={traillerId} opts={opts} />
      )}
      <List
        style={{ color: "#fff" }}
        component='nav'
        aria-label='main mailbox folders'>
        <ListItem button>
          <ListItemText primary='Movie Name : ' />
        </ListItem>
        <ListItem button>
          <ListItemText primary={movie_name} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary='Vote Rate : ' />
        </ListItem>
        <ListItem button>
          <ListItemText primary={rate_} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary='Release Date : ' />
        </ListItem>
        <ListItem button>
          <ListItemText primary={releaseDate_} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary='Overview : ' />
        </ListItem>
        <ListItem button>
          <ListItemText primary={overview_} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary='Number Of Votes : ' />
        </ListItem>
        <ListItem button>
          <ListItemText primary={raters_} />
        </ListItem>
      </List>
    </div>
  );
}

export default TraillerScreen_;
