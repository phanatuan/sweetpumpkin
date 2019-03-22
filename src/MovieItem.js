import React from "react";
import './MovieItem.css';

const displayMovies = movies => {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const display = movies.map((movie, index) => (
    <div className="col-6" key={index.toString()}>
      <div className="card">
        <div className="card-header align-center p-0 m-0">
          <img
            src={baseUrl + movie.poster_path}
            alt="Movie Poster"
            width="100%"
            className='responsiveMage img-fluid border-primary'
          />
        </div>
        <div className="card-body">
          <div className="card-title">
            <h4>{movie.original_title}</h4>
          </div>
          <div className="card-text">{movie.overview}</div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col">Year: {movie.release_date}</div>
            <div className="col">Rating: {movie.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  ));
  return display;
};

const MovieItem = props => {
  if (props.movies) {
    return displayMovies(props.movies);
  } else {
    return <h1>No Movies Yet</h1>;
  }
};

export default MovieItem;
