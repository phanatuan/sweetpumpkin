import React, { Component } from "react";
import MovieItem from "./MovieItem";
import Pagination from "../Pagination";
import "./MovieList.css";
import ModalYoutubeTrailer from "../ModalYoutubeTrailer";

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isOpen: false,
       trailers: [],
    }
  }

  closeModal = () => { 
    this.setState({
      isOpen: false,
    })
  }

  openModal = (id) => () => { 
    this.setState({ 
      isOpen: true,
    })
    this.fetchMovieTrailerId(id);
  }

  fetchMovieTrailerId = async id => {
    const API_KEY = "20332a8bd8988839153d7b400ba8f9db";
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    const trailers = await data.results;
    this.setState({
      trailers
    });
  };
  
  render() {
    let renderMovieItem = this.props.movies.map(movie => {
      return (
        <MovieItem
          movie={movie}
          key={movie.id}
          showTrailer={this.props.showTrailer}
          openModal={this.openModal}
        />
      );
    });
    return (
      <section className='movies'>
        <div className='container px-0'>
          <div className='card-columns'>
            {renderMovieItem}
          </div>
          <Pagination
            currentPage={this.props.currentPage}
            onPageSelect={this.props.onPageSelect}
            onPrevious={this.props.onPrevious}
            onNext={this.props.onNext}
          />
        </div>
        <ModalYoutubeTrailer
          isOpen={this.state.isOpen}
          closeModal={this.closeModal}
          trailers={this.state.trailers}
        />
      </section>
    );
  }
}

export default MovieList;

// console.log(this.state.movies);
// const printChunkArray = (arr, chunk) => {
//   let result = []
//    for (let i=0; i<arr.length; i+=chunk) {
//       result.push((arr.slice(i, i+chunk))
//     )
//     console.log(result);
//     return result.map(eachChunk => eachChunk.map(movie =>
//       <div className="col">
//         <MovieItem movie={movie} key={movie.id} />
//         <p>End Each Round</p>
//       </div>))
//   };
// }
// let renderChunk = printChunkArray(this.state.movies, 3)
