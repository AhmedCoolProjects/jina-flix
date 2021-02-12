/** @format */

import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import CardPaper_ from "./CardPaper_";
import { Link } from "react-router-dom";

function HorizontalScroll_({ title, fetchedUrl, categoryName }) {
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
    <div>
      <h2>{title}</h2>
      <div className='scroll_fix'>
        {movies.map((movie, key) => (
          <Link
            key={key}
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={"/movie/" + categoryName + "--" + movie.id}>
            <CardPaper_
              title={
                movie.original_title === undefined
                  ? movie.original_name
                  : movie.original_title
              }
              poster={movie.poster_path}
              overview={movie.overview}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HorizontalScroll_;
