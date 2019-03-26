import React from "react";

const MoviePage = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  if (!movie) { 
    return null;
  }    
  return (
    <>
      <h1>{movie.title}</h1>
      <img src={baseUrl + movie.poster_path} />
      <p>{movie.overview}</p>
    </>
    
  );
};

export default MoviePage;
