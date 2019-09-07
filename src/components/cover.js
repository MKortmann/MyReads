import React from "react";
import IdCheck from "./idcheck";
import PropTypes from "prop-types";

function cover (props) {
  // some books do not have image! So, let's check it!
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

cover.propTypes = {
  storedBooks: PropTypes.array.isRequired
}

export default cover;
