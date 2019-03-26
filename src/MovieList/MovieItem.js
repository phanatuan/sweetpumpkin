import React from "react";
import { Link } from "react-router-dom";
import ModalYoutubeTrailer from "../ModalYoutubeTrailer";
import "./MovieItem.css";

class MovieItem extends React.Component {
  render() {
    const baseUrl = "https://image.tmdb.org/t/p/w500/";
    const displayMovie = (movie) => {
      return (
        <div className='card mb-5 shadow border-light' key={movie.id}>
          <div className='card-header align-center p-0 m-0'>
            <img
              src={baseUrl + movie.poster_path}
              alt='Movie Poster'
              style={{ maxHeight: 500, height: "auto", width: "100%" }}
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
            <div className='d-flex flex-row justify-content-between'>
              <div>
                Year: <b>{movie.release_date}</b>
              </div>
              <div>
                Rating:<b> {movie.vote_average}</b>
              </div>
            </div>
            <Link to={`/movie/${movie.id}`}>
              <button className='btn btn-primary btn-block my-3'>
                View Detailed (Not Work Yet)
              </button>
            </Link>
            <button
              onClick={this.props.openModal(movie.id)}
              className='btn btn-primary btn-block my-3'>
              Show Trailer
            </button>
          </div>
        </div>
      );
    };

    if (this.props.movie) {
      return (
        <>
          {displayMovie(this.props.movie)}
        </>
      );
    } else {
      return <h1>No Movies Yet</h1>;
    }
  }
}

export default MovieItem;
