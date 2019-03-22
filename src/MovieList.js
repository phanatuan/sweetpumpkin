import React, { Component } from "react";
import MovieItem from "./MovieItem";
import Pagination from './Pagination';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount = async () => {
    let url = `https://api.themoviedb.org/3/list/1?api_key=${
      process.env.REACT_APP_TMDB_API_KEY
    }`;
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: data.items
        });
      });
  };

  render() {
    return (
      <section className='movies'>
        <div className='container px-0'>
          <div className='row'>
            <MovieItem movies={this.state.movies} />
            <Pagination />
          </div>
        </div>
      </section>
    );
  }
}

export default MovieList;
