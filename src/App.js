import React, { Component } from "react";
import Header from "./Header";
import MovieList from "./MovieList/MovieList";
import Navigation from "./Navigation";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      sortMethod: "",
      searchMovie: "",
      filterRating: {
        min: 0,
        max: 10
      },
      filterYear: {
        min: 1987,
        max: 2019
      },
      currentPage: 1,
      isOpen: false
    };
  }

  componentDidMount = () => {
    this.fetchPage(this.state.currentPage);
  };

  fetchPage = page => {
    let API_KEY = "20332a8bd8988839153d7b400ba8f9db";
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: data.results
        });
      });
  };

  handleFilterRating = filterRating => {
    this.setState({
      filterRating
    });
  };

  handleFilterYear = filterYear => {
    this.setState({
      filterYear
    });
  };

  handleSearch = e => {
    this.setState({
      searchMovie: e.target.value
    });
  };

  handleSort = sortMethod => () => {
    if (sortMethod === "Clear All") {
      console.log("Clearrr");
      this.setState({
        sortMethod: "",
        searchMovie: "",
        filterRating: {
          min: 0,
          max: 10
        },
        filterYear: {
          min: 1987,
          max: 2019
        }
      });
    } else {
      this.setState({
        sortMethod
      });
    }
  };

  onPageSelect = value => () => {
    this.setState(
      {
        currentPage: value
      },
      () => this.fetchPage(this.state.currentPage)
    );
  };

  onPrevious = () => {
    this.setState(
      {
        currentPage: this.state.currentPage - 1
      },
      () => this.fetchPage(this.state.currentPage)
    );
  };

  onNext = () => {
    this.setState(
      {
        currentPage: this.state.currentPage + 1
      },
      () => this.fetchPage(this.state.currentPage)
    );
  };

  showTrailer = id => () => {
    console.log("Show Trailer " + id);
  };

  render() {
    let {
      sortMethod,
      movies,
      searchMovie,
      filterRating,
      filterYear,
      currentPage
    } = this.state;
    let {
      handleSort,
      handleClearAll,
      handleSearch,
      handleFilterRating,
      handleFilterYear,
      onPrevious,
      onNext,
      onPageSelect
    } = this;
    let displayMovies;

    displayMovies = movies
      .filter(
        movie =>
          movie.title.toLowerCase().includes(searchMovie.toLowerCase()) ||
          movie.overview.toLowerCase().includes(searchMovie.toLowerCase())
      )
      .filter(
        movie =>
          movie.vote_average > this.state.filterRating.min &&
          movie.vote_average < this.state.filterRating.max
      )
      .sort((a, b) =>
        sortMethod === "Low To High"
          ? a.vote_average - b.vote_average
          : b.vote_average - a.vote_average
      );

    const MoviePage = ({ match }) => {
      return (
        <MoviePage
          movie={displayMovies.filter(movie => movie.id === match.params.id)}
        />
      );
    };

    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-4'>
            <Navigation
              movies={displayMovies}
              handleSort={handleSort}
              handleClearAll={handleClearAll}
              searchMovie={searchMovie}
              handleSearch={handleSearch}
              handleFilterRating={handleFilterRating}
              filterRating={filterRating}
              handleFilterYear={handleFilterYear}
              filterYear={filterYear}
            />
          </div>
          <div className='col-8'>
            <MovieList
              movies={displayMovies}
              onPrevious={onPrevious}
              onNext={onNext}
              onPageSelect={onPageSelect}
              currentPage={currentPage}
              showTrailer={this.showTrailer}
            />
          </div>
        </div>
        <Switch>
          <Route path='/movie/:movieId' component={MoviePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
