import React from "react";
import { Link } from "react-router-dom";
import logo from "../icons/mk.svg";

// It is basically the header + navs!!!
function header() {
  return (
    <React.Fragment>
      <header className="logo">
        <div className="container">
          <h1 style={{padding: 0, margin: "15px"}}>MyReads</h1>
        </div>
      </header>
      <nav style={headerStyle}>
        <img src={logo} />
        <span style={{paddingTop: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/about">About</Link>
        </span>
      </nav>
    </React.Fragment>
  )
}

const headerStyle = {
  background: "#343a40",
  color: "white",
  padding: 0,
  margin: 0,
}

export default header;
