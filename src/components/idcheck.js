import React from "react";

function idCheck (props) {

  let shelf = "Not In Library";

  let style = {
    textAlign: "center", width: 128, marginTop: -20, color: "white",
    backgroundColor: "#17a2b8",
    opacity: "0.8"
  }

  props.storedBooks.forEach((storedBook) => {

    if(storedBook.id === props.book.id) {
      shelf = storedBook.shelf;

      style = {
        textAlign: "center", width: 128, marginTop: -20,color: "white",
        backgroundColor: "#007bff", opacity: "0.8"
      }

    }

  })

if(props.book.shelf !== undefined) {
  switch(props.book.shelf) {
      case "currentlyReading":
        shelf="currentlyReading"
        style = {textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor: "#007bff", opacity: "0.8"}
        break;
      case "wantToRead":
        shelf="wantToRead";
        style = {textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor: "#dc3545", opacity: "0.7"}
        break;
      case "read":
        shelf="read";
        style = {textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor: "#6c757d", opacity: "0.7"}
        break;
      default:
      shelf = "Not In Library";
      style = {textAlign: "center", width: 128, marginTop: -20, color: "white",backgroundColor: "#17a2b8", opacity: "0.7"}
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
