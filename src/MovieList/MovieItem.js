import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import YouTube from "@u-wave/react-youtube";
import "./MovieItem.css";

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      id: null, 
      trailers: [],
    };
  }

  showTrailer = (id) => () => {
    this.setState({id, isOpen: true})
    this.fetchMovieTrailerId(id)
    console.log("show trailer");
  };

  fetchMovieTrailerId = async (id) => { 
    const API_KEY = '20332a8bd8988839153d7b400ba8f9db'
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`  
    const response = await fetch(url)
    const data = await response.json()
    const trailers = await data.results
    // console.log(trailers[0].key);
    this.setState({ 
      trailers
    })
  }

  render() {
    const baseUrl = "https://image.tmdb.org/t/p/w500/";
    const displayMovie = (movie, showTrailer) => {
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
            <div className='row'>
              <div className='col'>Year: {movie.release_date}</div>
              <div className='col'>Rating: {movie.vote_average}</div>
            </div>
            <Link to={`/movie/${movie.id}`}>
              <button className='btn btn-primary btn-block my-3'>
                View Detailed (Not Work Yet)
              </button>
            </Link>
            <button
              onClick={showTrailer(movie.id)}
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
          {displayMovie(this.props.movie, this.showTrailer)}
          <ReactModal isOpen={this.state.isOpen}>
            <button onClick={() => this.setState({ isOpen: false })}>
              Hide Modal {this.state.id} 
             <p>{this.state.trailers[0] ? this.state.trailers[0].key : 'Nothing'}</p>
            </button>
            {this.state.trailers[0] ? <YouTube video={this.state.trailers[0].key} autoplay /> : 'No Trailer'}
         
          </ReactModal>
        </>
      );
    } else {
      return <h1>No Movies Yet</h1>;
    }
  }
}

export default MovieItem;
