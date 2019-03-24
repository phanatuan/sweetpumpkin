import React, { Component } from "react";

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenres: ""
    };
  }

  
  render() {
    return (
      <div>
        <select
          value={this.state.selectedGenres}
          name="select"
          id=""
          onChange={this.onGenreChange}
        >
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
        </select>
      </div>
    );
  }
}

export default Selection;
