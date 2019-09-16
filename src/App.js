import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import './App.css';
import Header from "./components/header";
import About from "./components/about";
import AllocationBooks from "./components/allocationbooks";
import SearchPage from "./components/searchpage";
import searchImg from "./icons/search.svg";
import Spinner from "./components/Spinner/Spinner"


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
    loading: true
  }

  // As soon as the component mount let's get all the books
  componentDidMount() {
    console.log("[App.js] - Component Did Mount")
    BooksAPI.getAll()
      .then( (response) =>  {
        this.setState({ books: response, loading: false })
        this.reorganizeBooks();
      })
      .catch(error => {
        this.setState({ loading: true})
        console.log(`Something wen wrong at [App.js]: ComponentDidMount -> BOOKS.API, error: ${error}`);
        alert("Please, check your internet connection and reload the App!! Is the problem solved? If not, please, contact your webmaster!")
      })
  }

  // reorganize the books in accord to the shelf
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

  // move the book from one shelf to another
  move = (book, e) => {
    BooksAPI.update(book, e.target.value)
      .then( (response) => {
        this.componentDidMount();
      })
  }

  // search for a specific book
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

  // THE FIRST PAGE
  Home = () => {
    return(
      <div className="list-books">
        { !this.state.loading ? (
        <React.Fragment>
        <AllocationBooks books={this.state.currentlyReading} storedBooks={this.state.books}
          title={"Currently Reading"} move={this.move} />
        <AllocationBooks
          books={this.state.wantToRead} storedBooks={this.state.books}
          title={"Want To Read"} move={this.move} />
        <AllocationBooks
          books={this.state.read} storedBooks={this.state.books}
          title={"Read"} move={this.move} />
        <div className="open-search">
          <Link to="/search"><button>Search</button></Link>
        </div>
        </React.Fragment>
      ) : <Spinner />}
      </div>
    )
  }

  // THE SEARCH PAGE
  Search = () => {
    return (
      <React.Fragment>
        <SearchPage search={this.search} closeSearchPage={this.closeSearchPage}  />
        {this.state.searchedBooks.length > 0 ? (
          <AllocationBooks
            books={this.state.searchedBooks} storedBooks={this.state.books}
            title={"Searched Books"} move={this.move}
          />
        ):(
          <div style={{textAlign: "center"}}>
          <h2>No Book Founded</h2>
          <img src={searchImg}/>
          </div>
        )}
      </React.Fragment>
    )
  }

  // THE ABOUT PAGE
  About = () =>  {
    return(<About />)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        </div>
        <Switch>
          <Route path="/" exact component={this.Home} />
          <Route path="/search" component={this.Search} />
          <Route path="/about" component={this.About} />
        </Switch>
      </Router>
    )
  }
}

export default BooksApp
