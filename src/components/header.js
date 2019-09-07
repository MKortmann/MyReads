import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>

      <header className="logo">
        <div className="container">
          <h1 style={{padding: 0, margin: "15px"}}>MyReads</h1>
        </div>
      </header>

      <nav style={headerStyle}>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/about">About</Link>
      </nav>
    </React.Fragment>

  )
}

const headerStyle = {
  textAlign: "center",
  background: "#343a40",
  color: "white",
  padding: "5px 10px 5px 10px",
  margin: 0,
}

export default Header;
