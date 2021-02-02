/** @format */

import React from "react";
import requests from "../api/Requests_";
import HorizontalScroll_ from "../components/HorizontalScroll_";
import moment from "moment";

function DashboardPage_() {
  return (
    <div>
      <HorizontalScroll_
        title={`Trending ${moment(Date.now()).format("MMMM Do YYYY")}`}
        fetchedUrl={requests.fetchTrending}
      />
      <HorizontalScroll_
        title='Top Rated'
        fetchedUrl={requests.fetchTopRated}
      />
      <HorizontalScroll_
        title='Netflix Originals'
        fetchedUrl={requests.fetchNetflixOriginals}
      />
      <HorizontalScroll_
        title='Netflix Originals'
        fetchedUrl={requests.fetchNetflixOriginals}
      />
      <HorizontalScroll_
        title='Action Movies'
        fetchedUrl={requests.fetchActionMovies}
      />
      <HorizontalScroll_
        title='Romance Movies'
        fetchedUrl={requests.fetchRomanceMovies}
      />
      <HorizontalScroll_
        title='Comedy Movies'
        fetchedUrl={requests.fetchComedyMovies}
      />
      <HorizontalScroll_
        title='Horror Movies'
        fetchedUrl={requests.fetchHorrorMovies}
      />
      <HorizontalScroll_
        title='Documentaries'
        fetchedUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default DashboardPage_;
