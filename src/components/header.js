import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>

      <header className="logo">
        <div className="container">
          <h1>MyReads</h1>
        </div>
      </header>

      <nav style={headerStyle}>
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/search">Search</Link>
        </a>
        <a>
          <Link to="/about">About</Link>
        </a>
      </nav>
    </React.Fragment>

  )
}

const headerStyle = {
  textAlign: "center",
  background: "#343a40",
  color: "white",
  padding: "10px 10px 10px 10px",
  margin: 0,
}

export default Header;
