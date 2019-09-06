import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./book";
import SubHeader from "./subheader";

class allocationBooks extends Component {

  render() {
    return  (
      <div className="bookshelf">
        <SubHeader title={this.props.title}/>
          <ol className="books-grid">
            <Book books={this.props.books}
             move={this.props.move}
             storedBooks={this.props.storedBooks}
            />
          </ol>
      </div>
    );

  }
}

allocationBooks.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default allocationBooks;
