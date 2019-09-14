import React from "react";
// API to generate id's
import PropTypes from "prop-types";
const uuidv4 = require('uuid/v4');

// this stateless component basically return the authors.
// Used to make a better style!
function authors(props) {
  if(props.authors !== undefined) {
    return props.authors.map((author) => (
      <div key={uuidv4()} style={style}>
         {author}
      </div>
    ))
  } else {
    return (
      <div key={uuidv4()}></div>
    )
  }
}

const style = {
  margin: "0",
  fontSize: "12px"
}

authors.propTypes = {
  authors: PropTypes.array
}

export default authors;
