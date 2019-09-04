import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./book";

class readStates extends Component {

  render() {
    return this.props.books.map((book) => (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book
              key={book.id}
              title={book.title}
              author={book.authors}
              linkImg={"url(" + book.imageLinks.thumbnail + ")"}/>
          </ol>
        </div>
      </div>
    ));

  }
}

export default readStates;
