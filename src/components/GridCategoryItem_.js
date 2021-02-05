/** @format */

import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { imageBaseUrl } from "../api/axios";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

function GridCategoryItem_({ title, poster, overview }) {
  const classes = useStyles();
  return (
    <GridListTile cols={false ? 2 : 1} rows={false ? 2 : 1}>
      <img /*src={`${imageBaseUrl}${poster}`}*/ alt={title} />
      <GridListTileBar
        title={title}
        titlePosition='top'
        actionIcon={
          <IconButton aria-label={`star ${title}`} className={classes.icon}>
            <StarBorderIcon />
          </IconButton>
        }
        actionPosition='left'
        className={classes.titleBar}
      />
    </GridListTile>
  );
}

export default GridCategoryItem_;
