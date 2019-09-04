import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from "./components/layout/header";
// The ReadState will be the states: Currently Reading, Want To Read and Read.
import ReadStates from "./components/layout/readstates";
// Search Page: complete new page to search books
import SearchPage from "./components/layout/searchpage";

class BooksApp extends React.Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <div className="list-books">
            <Header />
            <div className="list-books-content">
              <ReadStates />
              <ReadStates />
              <ReadStates />
            </div>
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
