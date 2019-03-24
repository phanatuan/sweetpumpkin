import React, { Component } from "react";

class SearchInput extends Component {
  render() {
    return (
        <input
          style={{ width: "100%", height: 50, marginBottom: "1.2rem" }}
          type='text'
          placeholder='Search Movie'
          value={this.props.searchMovie}
          onChange={this.props.handleSearch}
        />
    );
  }
}

export default SearchInput;
