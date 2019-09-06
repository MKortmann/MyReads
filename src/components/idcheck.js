import React from "react";

function idCheck (props) {

  let shelf = "Not In Library";

  let style = {
    textAlign: "center", width: 128, marginTop: -20, color: "white",
    backgroundColor: "#ffc107"
  }

  props.storedBooks.forEach((storedBook) => {

    if(storedBook.id === props.book.id) {
      shelf = storedBook.shelf;

      style = {
        textAlign: "center", width: 128, marginTop: -20,color: "white",
        backgroundColor: "#007bff"
      }

    }

  })

if(props.book.shelf !== undefined) {
  switch(props.book.shelf) {
      case "currentlyReading":
        shelf="currentlyReading"
        style = {textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor: "#007bff"}
        break;
      case "wantToRead":
        shelf="wantToRead";
        style = {textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor: "#dc3545"}
        break;
      case "read":
        shelf="read";
        style = {textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor: "#6c757d"}
        break;
      default:
      shelf = "Not In Library";
      style = {textAlign: "center", width: 128, marginTop: -20, color: "white",backgroundColor: "#ffc107"}
      break;
  }
}



    return (
      <React.Fragment>
        <p style={style}>{shelf}</p>
      </React.Fragment>
    )

}


export default idCheck;
