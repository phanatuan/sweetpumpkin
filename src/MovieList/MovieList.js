import React, { Component } from "react";
import MovieItem from "./MovieItem";
import Pagination from "../Pagination";
import "./MovieList.css";

class MovieList extends Component {
  render() {
    let renderMovieItem = this.props.movies.map(movie => {
      return <MovieItem movie={movie} key={movie.id} showTrailer={this.props.showTrailer} />;
    });
    return (
      <section className='movies'>
        <div className='container px-0'>
          <div className='card-columns'>
            {renderMovieItem}
            {/* {renderChunk} */}
          </div>
          <Pagination
            currentPage={this.props.currentPage}
            onPageSelect={this.props.onPageSelect}
            onPrevious={this.props.onPrevious}
            onNext={this.props.onNext}
          />
        </div>
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
