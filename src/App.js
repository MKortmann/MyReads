import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
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

  componentDidUpdate() {
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

    this.state.books.forEach((book) => {
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

    this.setState({currentlyReading: cr});
    this.setState({wantToRead: wr});
    this.setState({read: r});

    console.log(this.state.currentlyReading);
    console.log(this.state.wantToRead);
    console.log(this.state.read);

  }

  move = (book, e) => {
    console.log(e.target.value);
    console.log(book);

    BooksAPI.update(book, e.target.value)
      .then( (response) =>  {
        console.log(response);
      })
  }

  search = (e) => {
    console.log(e.target.value);
  }

  closeSearchPage = () => {
    this.setState({ showSearchPage: false })
  }



  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage search={this.search} closeSearchPage={this.closeSearchPage}  />
        ) : (
          <div className="list-books">
            <Header />
            <AllocationBooks
              books={this.state.currentlyReading}
              title={"Currently Reading"}
              move={this.move}
            />
            <AllocationBooks
              books={this.state.wantToRead}
              title={"Want To Read"}
              move={this.move}
            />
            <AllocationBooks
              books={this.state.read}
              title={"Read"}
              move={this.move}
            />
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
