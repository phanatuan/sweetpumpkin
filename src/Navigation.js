import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenres: "",
      genreList: [],
      value: { min: 2, max: 10 }
    };
  }

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
    return (
      <section className='navigation'>
        <input type='text' placeholder='Search Movie' />
        <p>Sort By Rating</p>
        <a href='#' className='btn btn-light'>
          Low to High
        </a>
        <a href='#' className='btn btn-light'>
          High to Low
        </a>
        <h4>Genres</h4>
        <Selection
          selectedGenres={this.state.selectedGenres}
          onGenreChange={this.onGenreChange}
        />
        <InputRange
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
        <InputRange
          maxValue={20}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </section>
    );
  }
}

const Selection = ({ selectedGenres, onGenreChange }) => {
  return (
    <div>
      <select
        value={selectedGenres}
        name='select'
        id=''
        onChange={onGenreChange}>
        <option value='Comedy'>Comedy</option>
        <option value='Action'>Action</option>
        <option value='Drama'>Drama</option>
      </select>
    </div>
  );
};

export default Navigation;
