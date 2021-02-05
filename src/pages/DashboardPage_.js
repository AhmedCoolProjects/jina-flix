/** @format */

import React from "react";
import requests from "../api/Requests_";
import { categories } from "../components/Constants_";
import HorizontalScroll_ from "../components/HorizontalScroll_";

function DashboardPage_() {
  return (
    <div>
      <HorizontalScroll_
        title={categories[0]}
        fetchedUrl={requests.fetchTrending}
      />
      <HorizontalScroll_
        title={categories[1]}
        fetchedUrl={requests.fetchTopRated}
      />
      <HorizontalScroll_
        title={categories[2]}
        fetchedUrl={requests.fetchNetflixOriginals}
      />
      <HorizontalScroll_
        title={categories[4]}
        fetchedUrl={requests.fetchActionMovies}
      />
      <HorizontalScroll_
        title={categories[5]}
        fetchedUrl={requests.fetchRomanceMovies}
      />
      <HorizontalScroll_
        title={categories[6]}
        fetchedUrl={requests.fetchComedyMovies}
      />
      <HorizontalScroll_
        title={categories[7]}
        fetchedUrl={requests.fetchHorrorMovies}
      />
      <HorizontalScroll_
        title={categories[8]}
        fetchedUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default DashboardPage_;
