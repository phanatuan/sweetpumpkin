import React from "react";
import MoviePage from '../MoviePage';
import "./MovieItem.css";

  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const displayMovie = (movie) => {
    return (
      <div className='card mb-5 shadow border-light' key={movie.id}>
        <div className='card-header align-center p-0 m-0'>
          <img
            src={baseUrl + movie.poster_path}
            alt='Movie Poster'
            style={{ maxHeight: 500, height: "auto", width: '100%' }}
            className='border-primary'
          />
        </div>
        <div className='card-body'>
          <div className='card-title'>
            <h4>{movie.original_title}</h4>
          </div>
          <div className='card-text'>{movie.overview}</div>
        </div>
        <div className='card-footer'>
          <div className='row'>
            <div className='col'>Year: {movie.release_date}</div>
            <div className='col'>Rating: {movie.vote_average}</div>
          </div>
          <button className='btn btn-primary btn-block my-3'>View Detailed</button>
        </div>
      </div>
    );
  };

const MovieItem = ({movie}) => {
  if (movie) {
    return displayMovie(movie);
  } else {
    return <h1>No Movies Yet</h1>;
  }
};

export default MovieItem;
