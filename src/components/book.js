import React, { Component } from "react";
import PropTypes from "prop-types";
import Authors from "./authors";
import Cover from "./cover";

class Book extends Component {

  // used in case of the search menu
  checkBookShelf(book) {
    let selectValue = "none";
    const storedBook = [...this.props.storedBooks];

    storedBook.forEach((stored) => {
        if(stored.id === book.id) {
          selectValue = stored.shelf;
          return selectValue;
        }
    })

    return selectValue;
  }




  render() {

      return this.props.books.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <Cover book={book} storedBooks={this.props.storedBooks} />
              <div className="book-shelf-changer">
                <select onChange={this.props.move.bind(this, book)} value={book.shelf ? book.shelf : this.checkBookShelf(book)}>
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
