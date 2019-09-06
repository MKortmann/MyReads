import React from "react";
import IdCheck from "./idcheck";

function Cover (props) {

  // console.log(props.book.id);
  // console.log(props.storedBooks);

  if(props.book.imageLinks !== undefined) {
    return (
       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  "url(" + props.book.imageLinks.thumbnail + ")"}}>
       <IdCheck book={props.book} storedBooks={props.storedBooks} />
       </div>
    )

  } else {
    return (
      <div className="book-cover" style={{ width: 128, height: 193, background:  "white"}}>
      <IdCheck book={props.book} storedBooks={props.storedBooks} />
      </div>
    )
  }

}


export default Cover;
