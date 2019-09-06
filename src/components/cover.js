import React from "react";

function Cover (props) {

  if(props.book.imageLinks !== undefined) {
    return (
       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  "url(" + props.book.imageLinks.thumbnail + ")"}}>
       <p style={{textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor:  "#007bff"}}>{props.book.shelf}</p>
       </div>
    )

  } else {
    return (
      <div className="book-cover" style={{ width: 128, height: 193, background:  "white"}}>
      <p style={{textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor:  "#007bff"}}>{props.book.shelf}</p>
      </div>
    )
  }

}


export default Cover;
