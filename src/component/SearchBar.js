import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // make sure to we call cb from parent
    this.props.onFormSubmission(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

// go into App
export default SearchBar;
