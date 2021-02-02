/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { imageBaseUrl } from "../api/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    minWidth: theme.spacing(16),
    "& > *": {
      margin: theme.spacing(1),
      minWidth: theme.spacing(16),
      height: theme.spacing(24),
    },
  },
}));

export default function SimplePaper({ title, poster }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className='paper_' elevation={3}>
        <img
          className='img_poster'
          src={`${imageBaseUrl}${poster}`}
          alt={title}
        ></img>
      </Paper>
    </div>
  );
}
