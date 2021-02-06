/** @format */

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import axios, { imageBaseUrl } from "../api/axios";
import requests from "../api/Requests_";
import { categories, categoriesUri } from "../components/Constants_";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "max-content",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function CategoryPage_({ category_ }) {
  const fetchedUrl = requests[category_];
  const category_name = categories[categoriesUri.indexOf(category_)];
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  // get the list of object movies and push it inside the movies variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchedUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchedUrl]);

  return (
    <div className={classes.root}>
      <GridList
        cols={3}
        cellHeight={500}
        spacing={3}
        className={classes.gridList}>
        <GridListTile key='Subheader' cols={3} style={{ height: "auto" }}>
          <ListSubheader component='div'>{category_name}</ListSubheader>
        </GridListTile>
        {movies.map((movie, key) => (
          <GridListTile key={key}>
            <img
              style={{ objectFit: "contain" }}
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={
                movie.original_title === undefined
                  ? movie.original_name
                  : movie.original_title
              }
            />
            <GridListTileBar
              title={
                movie.original_title === undefined
                  ? movie.original_name
                  : movie.original_title
              }
              subtitle={<span>overview: {movie.overview}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${
                    movie.original_title === undefined
                      ? movie.original_name
                      : movie.original_title
                  }`}
                  className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
