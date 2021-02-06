/** @format */

import moment from "moment";
export const categories = [
  `Trending ${moment(Date.now()).format("MMMM Do YYYY")}`,
  "Top Rated",
  "Netflix Originals",
  "Action Movies",
  "Romance Movies",
  "Comedy Movies",
  "Horror Movies",
  "Documentaries",
];
export const links = [
  `/category/Trending ${moment(Date.now()).format("MMMM Do YYYY")}`,
  "/category/Top Rated",
  "/category/Netflix Originals",
  "/category/Action Movies",
  "/category/Romance Movies",
  "/category/Comedy Movies",
  "/category/Horror Movies",
  "/category/Documentaries",
];

export const categoriesUri = [
  "fetchTrending",
  "fetchTopRated",
  "fetchNetflixOriginals",
  "fetchActionMovies",
  "fetchRomanceMovies",
  "fetchComedyMovies",
  "fetchHorrorMovies",
  "fetchDocumentaries",
];
