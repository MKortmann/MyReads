import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchPage extends Component {

  componentDidMount() {
    // used to set the focus to the input field
    this.refs.inputField.focus();
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"><button className="close-search" style={{cursor: "pointer"}}>Close</button></Link>
          <div className="search-books-input-wrapper">
          <input ref="inputField" type="text" onChange={this.props.search.bind(this)} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
