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
        // console.log(response)
        this.reorganizeBooks()
      })
  }

  reorganizeBooks = () => {
    let cr = [];
    let wr = [];
    let r = [];

    this.state.books.map((book) => {
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
      }
    })

    this.setState({currentlyReading: cr});
    this.setState({wantToRead: wr});
    this.setState({read: r});

    console.log(this.state.currentlyReading);
    console.log(this.state.wantToRead);
    console.log(this.state.read);

  }



  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <div className="list-books">
            <Header />
            <AllocationBooks books={this.state.currentlyReading} title={"Currently Reading"}/>
            <AllocationBooks books={this.state.wantToRead} title={"Want To Read"}/>
            <AllocationBooks books={this.state.read} title={"Read"}/>
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
