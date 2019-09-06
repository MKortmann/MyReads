import React, { Component } from "react";
import PropTypes from "prop-types";
import Authors from "./authors";
const uuidv4 = require('uuid/v4');

class Book extends Component {

  render() {

      return this.props.books.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  "url(" + book.imageLinks.thumbnail + ")"}}>
              <p style={{textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor:  "#007bff"}}>{book.shelf}</p>
              </div>
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
            <Authors key={uuidv4()} authors={book.authors}/>
          </div>
        </li>
      ));
  }
}

Book.propTypes = {
  books: PropTypes.array.isRequired
}


export default Book;
