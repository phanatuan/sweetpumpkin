import React, { Component } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Navigation from "./Navigation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-3'>
            <Navigation />
          </div>
          <div className='col-9'>
            <MovieList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
