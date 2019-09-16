import React from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/" exact activeStyle = {activeStyle}>Home</NavLink>
        <NavLink to="/search" activeStyle = {activeStyle}>Search</NavLink>
        <NavLink to="/about" activeStyle = {activeStyle}>About</NavLink>
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

const activeStyle = {
  color: "#20c997",
  textDecoration: "underline",
  fontSize: "25px",
  paddingTop: 0,
  marginTop: 0
}

export default header;
