import React, { Component } from "react";
import PropTypes from "prop-types";
import Authors from "./authors";
import Cover from "./cover";

class Book extends Component {

  render() {

      return this.props.books.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <Cover book={book} storedBooks={this.props.storedBooks} />
              <div className="book-shelf-changer">
                <select onChange={this.props.move.bind(this, book)} value={book.shelf}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title" style={{color: "#007bff"}}>{book.title}</div>
            <Authors authors={book.authors}/>
          </div>
        </li>
      ));
  }
}

Book.propTypes = {
  books: PropTypes.array.isRequired
}


export default Book;
