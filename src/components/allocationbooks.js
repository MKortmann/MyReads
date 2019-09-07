import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./book";
import SubHeader from "./subheader";

// It represents basically a shelf (currently reading, want to read or read)!
class allocationBooks extends Component {

  render() {
    return  (
      <div className="bookshelf">
        <SubHeader title={this.props.title}/>
          <ol className="books-grid">
            <Book
              books={this.props.books}
              storedBooks={this.props.storedBooks}
              move={this.props.move}
            />
          </ol>
      </div>
    );

  }
}

allocationBooks.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  storedBooks: PropTypes.array.isRequired,
  move: PropTypes.func.isRequired
}

export default allocationBooks;
