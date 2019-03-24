import React, { Component } from "react";
import InputRange from "react-input-range";
import SearchInput from "./SearchInput";
import "react-input-range/lib/css/index.css";
import "./Navigation.css";

class Navigation extends Component {
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=20332a8bd8988839153d7b400ba8f9db&language=en-US"
    )
      .then(response => response.json())
      .then(genre =>
        this.setState({
          genreList: genre
        })
      );
  }

  onGenreChange = e => {
    this.setState({
      selectedGenres: e.target.value
    });
  };

  render() {
    let {
      searchMovie,
      filterYear,
      filterRating,
      handleSearch,
      handleSort,
      handleClearAll,
      handleFilterRating,
      handleFilterYear,
      movies
    } = this.props;

    return (
      <section className='navigation shadow p-4'>
        <p>Number of movies: {movies.length}</p>
        <SearchInput searchMovie={searchMovie} handleSearch={handleSearch} />
        <div
          className='btn-group btn-group-lg d-flex flex-row justify-content-around mb-2'
          role='group'>
          <button className='btn btn-light' onClick={handleSort("Low To High")}>
            Low to High
          </button>
          <button className='btn btn-light' onClick={handleSort("High To Low")}>
            High to Low
          </button>
          <button className='btn btn-light' onClick={handleSort('Clear All')}>
            Clear Sort
          </button>
        </div>

        <div className='mb-2 mt-3'>
          <p className='pb-2'>Rating</p>
          <InputRange
            draggableTrack
            formatLabel={value => value.toFixed(1)}
            step={0.1}
            value={filterRating}
            onChange={handleFilterRating}
          />
        </div>

        <p>Year</p>
        <InputRange
          maxValue={2019}
          minValue={1987}
          value={filterYear}
          onChange={handleFilterYear}
        />
      </section>
    );
  }
}

export default Navigation;
