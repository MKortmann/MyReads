import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from "./components/header";
// The ReadState will be the states: Currently Reading, Want To Read and Read.
import AllocationBooks from "./components/allocationbooks";
// Search Page: complete new page to search books
import SearchPage from "./components/searchpage";


class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    searchedBooks: [],
    showSearchPage: false
  }

  // As soon as the component mount let's get all the books
  componentDidMount() {
    BooksAPI.getAll()
      .then( (response) =>  {
        this.setState({ books: response })
        this.reorganizeBooks()
      })
  }

  reorganizeBooks = () => {
    let cr = [];
    let wr = [];
    let r = [];

    let localbooks = [...this.state.books];

    localbooks.forEach((book) => {
      switch (book.shelf) {
        case "currentlyReading":
        cr.push(book);
        break
        case "wantToRead":
        wr.push(book);
        break
        case "read":
        r.push(book);
        break
        default:
        return false;
      }
    })

    this.setState({currentlyReading: cr, wantToRead: wr,  read: r});
  }

  move = (book, e) => {
    BooksAPI.update(book, e.target.value)
      .then( (response) => {
        this.componentDidMount();
      })
  }

  search = (e) => {
    if(e.target.value !== "") {
      BooksAPI.search(e.target.value)
        .then( (response) =>  {
          this.setState({ searchedBooks: response })
        })
    } else {
      const array = [];
      this.setState({searchedBooks: array})
    }

  }

  closeSearchPage = () => {
    this.setState({ showSearchPage: false })
  }

   Home = () =>  {
    return("")
  }

  Search = () =>  {
    return("")
  }

  About = () =>  {
    return("")
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {this.state.showSearchPage ? (
                <React.Fragment>
                <SearchPage search={this.search} closeSearchPage={this.closeSearchPage}  />
                {this.state.searchedBooks.length > 0 ? (
                  <AllocationBooks
                    books={this.state.searchedBooks}
                    storedBooks={this.state.books}
                    title={"Searched Books"}
                    move={this.move}
                  />
                ):(
                    <h2>No Book Founded</h2>
                )}
              </React.Fragment>
          ) : (
            <div className="list-books">
              <AllocationBooks books={this.state.currentlyReading} storedBooks={this.state.books}
                title={"Currently Reading"} move={this.move} />
              <AllocationBooks
                books={this.state.wantToRead} storedBooks={this.state.books}
                title={"Want To Read"} move={this.move} />
              <AllocationBooks
                books={this.state.read} storedBooks={this.state.books}
                title={"Read"} move={this.move} />
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
          )}
        </div>
      </Router>
    )
  }
}

export default BooksApp
