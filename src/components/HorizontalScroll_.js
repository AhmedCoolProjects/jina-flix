/** @format */

import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import CardPaper_ from "./CardPaper_";

function HorizontalScroll_({ title, fetchedUrl }) {
  const [movies, setMovies] = useState([]);
  // get the list of object movies and push it inside the movies variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchedUrl);
      setMovies(request.data.results);
      console.log(movies);
    }
    fetchData();
  }, [fetchedUrl]);

  return (
    <div>
      <h2>{title}</h2>
      <div className='scroll_fix'>
        {movies.map((movie, key) => (
          <CardPaper_
            key={key}
            title={movie.original_title}
            poster={movie.poster_path}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
}

export default HorizontalScroll_;
