/** @format */

import React from "react";
import requests from "../api/Requests_";
import { categories } from "../components/Constants_";
import HorizontalScroll_ from "../components/HorizontalScroll_";

function DashboardPage_() {
  return (
    <div>
      <HorizontalScroll_
        categoryName='fetchTrending'
        title={categories[0]}
        fetchedUrl={requests.fetchTrending}
      />
      <HorizontalScroll_
        categoryName='fetchTopRated'
        title={categories[1]}
        fetchedUrl={requests.fetchTopRated}
      />
      <HorizontalScroll_
        categoryName='fetchNetflixOriginals'
        title={categories[2]}
        fetchedUrl={requests.fetchNetflixOriginals}
      />
      <HorizontalScroll_
        categoryName='fetchActionMovies'
        title={categories[3]}
        fetchedUrl={requests.fetchActionMovies}
      />
      <HorizontalScroll_
        categoryName='fetchRomanceMovies'
        title={categories[4]}
        fetchedUrl={requests.fetchRomanceMovies}
      />
      <HorizontalScroll_
        categoryName='fetchComedyMovies'
        title={categories[5]}
        fetchedUrl={requests.fetchComedyMovies}
      />
      <HorizontalScroll_
        categoryName='fetchHorrorMovies'
        title={categories[6]}
        fetchedUrl={requests.fetchHorrorMovies}
      />
      <HorizontalScroll_
        categoryName='fetchDocumentaries'
        title={categories[7]}
        fetchedUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default DashboardPage_;
