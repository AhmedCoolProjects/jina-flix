/** @format */

import React, { useEffect, useState } from "react";
import requests from "../api/Requests_";
import axios from "../api/axios";
import TraillerScreen_ from "../components/TraillerScreen_";

function MovieRoom_({ category_, movie_id }) {
  const movie_id_int = parseInt(movie_id);
  const [movie_, setMovie_] = useState("");
  const [releaseDate_, setReleaseDate_] = useState("");
  const [overview_, setOverview_] = useState("");
  const [raters_, setRaters_] = useState("");
  const [rate_, setRate_] = useState("");
  // get the list of object movies and push it inside the movies variable
  useEffect(() => {
    async function fetchData() {
      const fetchedUrl = requests[category_];
      const request = await axios.get(fetchedUrl);
      const movie__ = request.data.results.filter((m) => m.id === movie_id_int);
      console.log(movie__);
      setMovie_(
        movie__[0].title === undefined ? movie__[0].name : movie__[0].title
      );
      setReleaseDate_(movie__[0].release_date);
      setOverview_(movie__[0].overview);
      setRate_(movie__[0].vote_average);
      setRaters_(movie__[0].vote_count);
    }
    fetchData();
  }, [category_]);

  return (
    <div>
      <TraillerScreen_
        movie_name={movie_}
        releaseDate_={releaseDate_}
        overview_={overview_}
        raters_={raters_}
        rate_={rate_}
      />
    </div>
  );
}

export default MovieRoom_;
