import React from "react";

function Header() {
  return (
    <h1 style={headerStyle}>
      MyReads
    </h1>
  )
}

const headerStyle = {
  textAlign: "center",
  background: " #007bff",
  color: "white",
  padding: "10px",
  margin: "0"
}

export default Header;